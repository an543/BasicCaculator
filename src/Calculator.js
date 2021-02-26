const Calculation = require('./models/Calculation')
const Sum = require('./Operations/Sum');
const Difference = require('./Operations/Difference');
const Product = require('./Operations/Product');
const Quotient = require('./Operations/Quotient');
const Square = require('./Operations/Square');
const SquareRoot = require('./Operations/SquareRoot');

class Calculator {
    static Calculations = []
    //Static methods can me called without instantiating and are good for actions
    static Sum(a,b) {
        //this is how you create a new object and this is good for data and actions
          let calculation = new Calculation(a,b,Sum);
          Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Difference(a,b) {
        //this is how you create a new object and this is good for data and actions
        let calculation = new Calculation(a,b,Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Product(a,b) {
        //this is how you create a new object and this is good for data and actions
        let calculation = new Calculation(a,b,Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Quotient(a,b) {
        //this is how you create a new object and this is good for data and actions
        let calculation = new Calculation(a,b,Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Square(a,b) {
        //this will find a square of a number
        let calculation = new Calculation(a,b,Square);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static SquareRoot(a,b) {
        //this will find a Squareroot of 2 numbers
        let calculation = new Calculation(a,b,SquareRoot);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
}
module.exports = Calculator;
