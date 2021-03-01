const CalculationTemplate = require('../src/models/Calculation');
const sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');


test('Test of CalculationTemplate Instantiation', () => {
    //I need to test the instantiation of the calculation object
    let opTemplate = Sum
    let calculation = new CalculationTemplate(1,2,opTemplate);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(opTemplate);
});
test('Test Get results for Sum function', () => {
    //I need to test the get results function
    let opTemplate = Sum;
    let calculation = new CalculationTemplate(1,2,opTemplate);
    expect(calculation.GetResults()).toBe(3);
});
