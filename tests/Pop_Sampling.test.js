const MarginErrorFunc = require('../src/Sample_Functions/MarginErrorFunc');
const randomListInt = require('../src/Ran_Num_Generator/RandListInt');

test('Test MarginError Function', () => {
    let arr = randomListInt(1,10,5,"hello world")
    console.log(arr);
    expect(MarginErrorFunc(5,arr)).toBe(NaN);
});