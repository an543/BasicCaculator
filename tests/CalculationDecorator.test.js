const CalculationDecorator= require('../src/models/Calculation');
const Sum = require('../src/Operations/Sum');

test('Test for decorator', () => {
    //I need to test the get results function
    mb = new CalculationDecorator();
    Sum(mb);
    expect(mb.sum()).toBe(2);
});
