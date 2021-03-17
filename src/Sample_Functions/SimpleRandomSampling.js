const Rand = require('random')

function SimpleRandomSampling(a, b){
    let re_Elements = [...a];
    let result = [];
    if(b>a.length){
        b = a.length;
    }
    for (let i = 0; i < b; i++){
        let chosenIndex = Rand.int(0,re_Elements.length-1);
        result.push(re_Elements[chosenIndex]);
        re_Elements.splice(chosenIndex, 1);
    }
    return result;
};
module.exports = SimpleRandomSampling;