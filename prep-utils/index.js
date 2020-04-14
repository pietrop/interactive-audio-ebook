const fs = require('fs');
const main = require('./src/index.js');
const bookId = 59; // 59
// 59
main(bookId).then((res) => {
    // optional write results to disk
    fs.writeFileSync(`./prep-utils/json/${bookId}.json`, JSON.stringify(res, null, 2))
    console.log(res)
})