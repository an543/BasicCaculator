const math = require('mathjs');
const Mean_Func = require('../src/Descript_Stats_Functions/Mean_Func');
const Median_Func = require('../src/Descript_Stats_Functions/Median_Func');
const Mode_Func = require('../src/Descript_Stats_Functions/Mode_Func');
const Variance_Func = require('../src/Descript_Stats_Functions/Variance_Func');
const Standard_Deviation_Func = require('../src/Descript_Stats_Functions/Standard_Deviation_Func');
const Quartiles_Func = require('../src/Descript_Stats_Functions/Quartiles_Func');
const Skewness_Func = require('../src/Descript_Stats_Functions/Skewness_Func');
const skewness = require('compute-skewness');
const Col_Variance = require('../src/Descript_Stats_Functions/Col_Variance');
const cov = require('compute-covariance');
const Mean_Deviation_Function = require('../src/Descript_Stats_Functions/Mean_Deviation_Function');
const z_Score_Func = require('../src/Descript_Stats_Functions/z_Score_Func');


test('Test Mean Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Mean_Func(testData)).toBe(math.mean(testData));
});
test('Test Median Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Median_Func(testData)).toBe(3.5);
});
test('Test Mode Function', () => {
   const testData = [1,1,2,3,4,5,6];
   expect(Mode_Func(testData)).toStrictEqual([1]);
});
test('Test Variance Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Variance_Func(testData)).toBe(NaN);
});
test('Test StandardDeviation Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Standard_Deviation_Func(testData)).toBe(NaN);
});
test('Test Quartiles Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Quartiles_Func(testData)).toStrictEqual([math.quantileSeq(testData, 0.25, this.sorted),
        math.quantileSeq(testData, 0.5, this.sorted),
        math.quantileSeq(testData, 0.75, this.sorted)]);
});
test('Test Skewness Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Skewness_Func(testData)).toBe(skewness(testData));
});
test('Test Covariance Function', () => {
    const testData = [1,2,3,4,5,6];
    const testData2 = [1,1,1,1,1,1];
    expect(Col_Variance(testData, testData2)).toStrictEqual(cov(testData, testData2));
});
test('Test MeanDeviation Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(Mean_Deviation_Function(testData)).toBe(1.5);
});
test('Test Zscore Function', () => {
    const testData = [1,2,3,4,5,6];
    expect(z_Score_Func(4, testData)).toBe(NaN);
});

