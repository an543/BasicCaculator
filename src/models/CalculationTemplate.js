class CalculationTemplate {
    constructor(a, b, opTemplate) {
        //"this" is the internal reference of the object to access its internal methods and properities
        this.a = a;
        this.b = b;
        this.op = opTemplate;
    }
    buildSum(){
        console.log (' Sum run')
    }
    buildSubtract(){
        console.log (' Subtract run')
    }


}
module.exports = CalculationTemplate;