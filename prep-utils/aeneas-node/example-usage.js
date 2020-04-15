const runAeneas = require('./index.js');
const book59 = require('../json/59.json');
const chapter = book59.chapters[0];
var sourceVideoPathSample = __dirname+'/huckfinn_01_twain_apc_64kb.mp3';//chapter.url;
const captionFileFormat = 'json';
runAeneas({text:chapter.text,captionFileFormat, sourceVideoPathSample})
    .then((res)=>{
        console.log('res runAeneas', res)
    })
    // .catch((er)=>{console.error(er)})