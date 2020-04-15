const fs = require("fs");
const path = require("path");
// originally from https://github.com/pietrop/pocketsphinx-stt
// modified to work with remote urls 
// const transcribe = require("pocketsphinx-stt");
const transcribe = require("./pocketsphinx-stt");
// const convertAndTranscribe = require('pocketsphinx-stt').convertAndTranscribe;
// const alignSTT = require("@bbc/stt-align-node").alignSTT;
const alignSTT = require("stt-align-node").alignSTT;

const main = async ({ url, text }) => {
  // const audioFile = path.join(process.cwd(),"audio", audioEbook.chapters[0].fileName);
  
  // const audioFile = audioEbook.chapters[0].url;
  const audioFile = url;

  // const audioFile = path.join( audioEbook.chapters[0].url); //<---
  console.log('audioFile', audioFile);
  // const textFile = audioEbook.chapters[0].text;//<---
  const textFile = text;
  //  create STT for audio files
  return new Promise((resolve, reject) => {
    transcribe(audioFile)
      .then(transcriptStt => {
        console.log("transcribe", transcriptStt);
        // align STT with original text
        const alignedJson = alignSTT(transcriptStt, textFile);
        console.log(alignedJson);
        // add back to audioEbook data structure
        // audioEbook.chapters[0].words = alignedJson;//<--
        // audioEbook.chapters[0].paragraphs = transcriptStt.paragraphs; //<--
        // save results
        // resolve(audioEbook);//<--
        resolve({words: alignedJson,paragraphs:transcriptStt.paragraphs });
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = main;
