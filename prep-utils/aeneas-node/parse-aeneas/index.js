
function parseAeneas(data){
    const result = JSON.parse(JSON.stringify(data.fragments));
    return result.map((el)=>{
        return {
            start: parseFloat(el.begin),
            end: parseFloat(el.end),
            text: el.lines[0]
        }
    })
}


module.exports = parseAeneas;