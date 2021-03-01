// The constructor to decorate the calculator
function Calculation() {


    this.sum = function () { return 2; };
    this.subtraction = function () { return 4; };

}

// Decorator
function Sum( Calculation ) {

    const result = Calculation.sum();
    Calculation.sum = function () {
        return this.sum = a + b;
    };

}
