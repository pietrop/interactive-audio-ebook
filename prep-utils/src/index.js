const fs = require('fs');
const path = require('path');
const request = require('request');
const convert = require('xml-js');
const download = require('download');
const cheerio = require('cheerio');
const unzip = require('unzip');
const Parser = require('rss-parser');
const Book = require('./parse-gutemberg-book/index.js');
const runAeneas = require('../aeneas-node/index.js');
const transcribeAndAlign = require('./transcribe-and-align/index.js');

// const convertAndTranscribe = require('pocketsphinx-stt').convertAndTranscribe;
// const alignJSONText = require('@bbc/stt-align-node').alignJSONText;

const parser = new Parser();
/**
 * 
 * Helper function
 */
async function get(url) {
    return new Promise((resolve, reject) => {
        request({ url, method: 'GET' }, (error, response, body) => {
            if (error) return reject(error)
            return resolve({ body, response })
        })
    })
}

// excludes file extension 
function getUrlPathName(url) {
    return path.parse(url).name;
}
// includes file extension
function getUrlPathBase(url) {
    return path.parse(url).base;
}

async function getChaptersInfoFromFeed(librivoxBookId){
  /**
   * get audio files url 
   * to use in front end, to embed audio in audio player, already hosted on librivox
   * eg get all the audios urls via RSS feed for all chapters https://librivox.org/rss/59
   */
  const feedUrl = `https://librivox.org/rss/${librivoxBookId}`;
  console.log(feedUrl)
  let feed = await parser.parseURL(feedUrl);
  console.log(feed)
  // fs.writeFileSync('./feed.json', JSON.stringify(feed))
  const { title, description, link } = feed;
  const audioEbook = {
    librivoxBookId, title, description, link
  }
  // console.log(feed)
  audioEbook.chapters = feed.items.map((item) => {
      return {
          title: item.title,
          url: item.enclosure.url,
          fileName: getUrlPathBase(item.enclosure.url),
          type: item.enclosure.type,
          duration: item.itunes.duration,
          chapter: parseInt(item.itunes.episode),
      }
  })
  return audioEbook;
}

async function getBookText(jsonData, librivoxBookId){
    /**
     * Get Book Text
     * From librivox API get  Gutemberg text API end point
     *  <url_text_source>http://www.gutenberg.org/etext/1941</url_text_source> 
     * url_text_source - get - 1941
     * From gutemberg Page get link url name to text file version of book.
     * Need to get it by scraping the page coz of incosisten naming. eg `75.txt` but also `76-0.txt` :shrug:
     */
    const pathToGutembergUrl = jsonData.xml.books.book.url_text_source._text;
    const gutembergId = getUrlPathName(pathToGutembergUrl);
    // first get the url 
    const gutembergEbookFilesIndex = `http://www.gutenberg.org/files/${gutembergId}`
    const gutembergEbookFilesIndexResponse = await get(gutembergEbookFilesIndex)
        // parse HTML to get to the actual url of the txt version
    const $ = cheerio.load(gutembergEbookFilesIndexResponse.body)
    const textId = $('a').html()
    const gutembergEbookTextEndPoint = `http://www.gutenberg.org/files/${gutembergId}/${textId}`;
    const gutembergEbookResponse = await get(gutembergEbookTextEndPoint)
    const gutembergEbook = gutembergEbookResponse.body;
    // console.log(gutembergEbook.body);
    const filename = `./prep-utils/text/libriVox-${librivoxBookId}_gutemberg-${ gutembergId }.txt`;
    // optionally write ebook source locally 
    fs.writeFileSync(filename, gutembergEbook)
    return {gutembergEbook, filename, gutembergId: parseInt(gutembergId)};
}


async function chapteriseEbook(filename){
    /**
     * Parse ebook to segment into chapters
     */
    const parsedBook = new Book(filename, false, false);
    const ebookChapters = parsedBook.getSegmentedChapter();
    return ebookChapters;
}

async function combineEbookChaptersWithAudioBookChapters(audioEbook, ebookChapters){
     /**
     * Combine ebook chapters with audiobook chapters
     */
     audioEbook.chapters = audioEbook.chapters.map((chapter, index) => {
         try{
            //  if(ebookChapters[index]){
                chapter.text = ebookChapters[index].text;
                return chapter;
            //  }
         }
         catch(e){
             console.error('combineEbookChaptersWithAudioBookChapters ')
         }
       
    })
    return audioEbook;
}

async function getLibriVoxData(librivoxBookId){
    const librivoxUrl = `https://librivox.org/api/feed/audiobooks/id/${librivoxBookId}`
    const res = await get(librivoxUrl)
    const xmlData = res.body;
    // XML to json 
    const jsonResponse = await convert.xml2json(xmlData, { compact: true, spaces: 4 });
    const jsonData = JSON.parse(jsonResponse);
    return jsonData;
}

async function downloadAudioFilesLocally(librivoxBookId,jsonData){
    /**
     * Download audio files locally
     * from Librivox API - to run STT on it later
     * https://librivox.org/api/feed/audiobooks/?id=52
     *  url_zip_file === http://www.archive.org/download/huck_finn_librivox/huck_finn_librivox_64kb_mp3.zip
     */
    const pathToLibriVoxAudio = jsonData.xml.books.book.url_zip_file._text;
    console.log('pathToLibriVoxAudio',pathToLibriVoxAudio);
    const zipFileName = getUrlPathBase(pathToLibriVoxAudio);
    return new Promise((success, reject)=>{
        // download mp3s for STT
        download(pathToLibriVoxAudio, 'audio')
        .then(() => {
            console.log('done!');
            try{
                fs.mkdirSync(`./prep-utils/audio/${librivoxBookId}`)
            }
            catch(e){
                console.error('Could not make a folder for the audio files')
            }
            fs.createReadStream(`./prep-utils/audio/${librivoxBookId}/${zipFileName}`).pipe(unzip.Extract({ path: 'audio' }));

        }).then((res) => {
            console.log(res);
            success(res)
        }).catch((er)=>{
            reject(er)
        })
    })
}

/**
 * Given a librivox ID, it 
 * - downloads the audio files, from the librivox API
 * - finds the url for the audio files for each chapter, from the RSS feed
 * - get the text of the ebook version, from gutemberg API
 * - segments the chapter 
 * @param {number} librivoxBookId - integer id for Librivox audiobook 
 */
async function main(librivoxBookId) {  
    const audioEbook = await getChaptersInfoFromFeed(librivoxBookId);
    console.log(audioEbook)
    console.log('Downlaod audioEbook')
    const jsonData = await getLibriVoxData(librivoxBookId)
    console.log('getLibriVoxData jsonData')
    //    const  res  = await downloadAudioFilesLocally(librivoxBookId, jsonData)
    // console.log( res)
    const  {gutembergEbook, filename, gutembergId} = await getBookText(jsonData,librivoxBookId)
    console.log('gutembergEbook gutembergEbook')
    // TODO: transform to pass book rather then file path 
    const chapterisedBook = await chapteriseEbook(filename);
    console.log('chapterisedBook chapterisedBook',JSON.stringify(chapterisedBook,null,2))
    const audioEbookWithText = await combineEbookChaptersWithAudioBookChapters(audioEbook, chapterisedBook);
    console.log('audioEbookWithText audioEbookWithText')
    // Download audio files
    // const res = await downloadAudioFilesLocally(librivoxBookId,jsonData)
    // console.log('downloadAudioFilesLocally',res)
    // align text with audio to generate word level timings

    const audioEbookWithTextAndGutembergId = { gutembergId, ...audioEbookWithText};

    /**
     * One Aeneas alignement
     */
    // const oneChapter = audioEbookWithTextAndGutembergId.chapters[0];
    // // TODO: if needed can download audio file here 
    // const sourceVideoPathSample = oneChapter.url;
    // const captionFileFormat = 'json';
    // const text = oneChapter.text;
    // await runAeneas({text, captionFileFormat, sourceVideoPathSample})
    //     .then((res)=>{
    //         console.log('res runAeneas', res)
    //         audioEbookWithTextAndGutembergId.chapters[0].json = res;
    //         return res;
    //     })

    /**
     * One chapter
     */
    // const oneChapter = audioEbookWithTextAndGutembergId.chapters[0];
    // TODO: if needed can download audio file here 
    // const sourceVideoPathSample = oneChapter.url;
    // const captionFileFormat = 'json';
    // const text = oneChapter.text;
    // audioEbookWithTextAndGutembergId.chapters[0].json = res;

    /**
     * chapters no promoses - not working, returns a list of promises
     */
    // const audioEbookWithTextAndGutembergIdAligned =  audioEbookWithTextAndGutembergId.chapters.map( async (chapter)=>{
    // const audioEbookWithTextAndGutembergIdAligned =  audioEbookWithTextAndGutembergId.chapters.slice(0, 2).map( async (chapter)=>{
    //     const {words, paragraphs } = await transcribeAndAlign({ url: chapter.url, text: chapter.text}); 
    //     chapter.words = words;
    //     return chapter;
    // })


     /**
     * chapters with promses
     */
    const promises = []
    audioEbookWithTextAndGutembergId.chapters.map( async (chapter)=>{
        //  audioEbookWithTextAndGutembergId.chapters.slice(0,2).map( async (chapter)=>{
        // const {words, paragraphs } = await transcribeAndAlign({ url: chapter.url, text: chapter.text}); 
        promises.push(transcribeAndAlign({ url: chapter.url, text: chapter.text}))
        // chapter.words = words;
        // return chapter;
    })
    console.log('promises',promises)
    // resolve promises
    const transcribeAndAlignPromises = await Promise.all(promises)
    console.log('transcribeAndAlignPromises',transcribeAndAlignPromises)
    // .then(response => console.log(response)) 
    const audioEbookWithTextAndGutembergIdAligned = audioEbookWithTextAndGutembergId.chapters.map((chapter, index)=>{
    //  audioEbookWithTextAndGutembergId.chapters = audioEbookWithTextAndGutembergId.chapters.slice(0,2).map((chapter, index)=>{
       const {words, paragraphs} = transcribeAndAlignPromises[index];
       chapter.words = words;
        //  chapter.paragraphs = paragraphs;
       return chapter;

    })
    console.log('audioEbookWithTextAndGutembergIdAligned',audioEbookWithTextAndGutembergId)
    
    return audioEbookWithTextAndGutembergId;
}


module.exports = main;