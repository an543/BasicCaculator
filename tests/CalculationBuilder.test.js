const CalculationBuilder = require('../src/models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');


test('Test of Calculation Instantiation', () => {
    //I need to test the instantiation of the calculation object
    let opBuilder = Sum
    let calculation = new CalculationBuilder(1,2,opBuilder);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(opBuilder);
});
test('Test Get results for Sum function', () => {
    //I need to test the get results function
    let opBuilder = Sum;
    let calculation = new CalculationBuilder(1,2,opBuilder);
    expect(calculation.GetResults()).toBe(3);
});
test('Test Get results for Difference  function', () => {
    //I need to test the get results function
    let opBuilder = Difference;
    let calculation = new CalculationBuilder(1,2,opBuilder);
    expect(calculation.GetResults()).toBe(-1);
});