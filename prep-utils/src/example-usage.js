const fs = require('fs');
const main = require('./index.js');
const bookId = 60; // 59
// 59
main(bookId).then((res) => {
    // optional write results to disk
    fs.writeFileSync(`./prep-utils/json/chapter-audio-text${bookId}.json`, JSON.stringify(res, null, 2))
    console.log(res)
})