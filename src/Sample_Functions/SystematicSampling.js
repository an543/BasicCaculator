function SystematicSampling(a, b){
    let result = [];

    if(b>a.length){
        b = a.length;
    }
    let interval = Math.floor(a.length/b);

    for (let i = 0; i < a.length; i = i + interval){
        if(result.length === b){
            continue;
        }
        result.push(a[i]);
    }
    return result;
};

module.exports = SystematicSampling;