const jstat = require('jstat');

module.exports = function CochranFunc(a, b, c){
    let zScore = -jstat.normal.inv((1-b)/2, 0, 1);
    return (Math.pow(zScore,2)*c*(1-c))/Math.pow(a, 2);
};