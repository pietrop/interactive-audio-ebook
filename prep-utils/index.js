const fs = require('fs');
const main = require('./src/index.js');
const bookId = process.argv[2]? parseInt(process.argv[2]): 59; // 31 59
// const indexJson = require('./json/index.json');
// const pluck = key => array => Array.from(new Set(array.map(obj => obj[key])));
// 59
main(bookId).then((res) => {
    // optional write results to disk
    fs.writeFileSync(`./prep-utils/json/${bookId}.json`, JSON.stringify(res, null, 2))
    // indexJson.push({title: res.title, id: res.librivoxBookId,librivoxBookId:res.librivoxBookId})
    // const newUndexJson = pluck(indexJson);
    // console.log('newUndexJson',newUndexJson)
    // fs.writeFileSync(`./prep-utils/json/index.json`, JSON.stringify(newUndexJson, null, 2))
    console.log(res)
    console.log('FINISHED RUNNING PREP UTILS SCRIPT!')
})