const jstat = require('jstat');

function Mean(elements){
    let sum = 0;
    elements.forEach(function (num){
        sum += num;
    })
    return sum/elements.length;
}

function ConfidenceInterval(a, b){
    let mean = Mean(a);
    return jstat.normalcy(mean, 1-b, a);
};

module.exports = ConfidenceInterval;