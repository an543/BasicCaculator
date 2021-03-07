class CalculationBuilder {
    //the constructor is the first method called after instantiation and usually sets the properties of the object
    constructor(a, b, opBuilder) {
        //"this" is the internal reference of the object to access its internal methods and properities
        this.a = a;
        this.b = b;
        this.op = opBuilder;
    }
    //Builder reset () for the calculator
    static reset() {
        return this.Calculations = [];
    }
    static setSum(a,b, opBuilder){
        this.sum = a + b;
    }
    static setDifference(a,b, opBuilder){
        this.subtraction = a - b;
    }
// and the rest of other operations if this is on the right track.

    //get results is a method so that it can return back the results of the calculation
    GetResults() {
        return this.opBuilder(this.a,this.b)
    }
}
module.exports = CalculationBuilder;