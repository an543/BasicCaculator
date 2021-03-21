[![Build Status](https://travis-ci.org/an543/BasicCaculator.svg?branch=master)](https://travis-ci.org/an543/BasicCaculator)
[![Coverage Status](https://coveralls.io/repos/github/an543/BasicCaculator/badge.svg?branch=master)](https://coveralls.io/github/an543/BasicCaculator?branch=master)

***Stats Calculator - Group Project***

Member : Quang Nguyen & Andy Nguyen 




***OOP***
1. Single Responsibility Principle 
   A single Responsibility principle is one of the parts of five object-oriented programming design of (S.O.L.I.D). A single Responsibility principle is nothing,
   but it is a computer-programming principle that states every module or class should have responsibility over a single part of the functionality provided by the software. and that responsibility should be entirely encapsulated by the class, module, or function.
function Difference (a,b) {
return a - b;
}
   function Product (a,b) {
   return a * b;
   }
   - Another example of this principle can be found which is:
     static clearList(){
     this.Calculations = [];
     }
  This principle can find more in the test file where each test represent each 
     operation
     
2. Open - Closed Principle 

JavaScript Modules should be open for extension but closed for modification.
Tutorial: 
"software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification".

Explanation: It tells you to write your own code so that you will be able to add new functionality(code) without changing the existing code. It prevents the situations in which a change to one of your code in the classes also requires you to adapt all depending on code in the classes.

Example: The best way to implement this by using the Interfaces. 

-	In this Class Diagram no changes required when a new shape is added (Follow the rules of open closed principle properly)
class Calculator {
    static Calculations = []
    //Static methods can me called without instantiating and are good for actions
    static Sum(a,b) {
        //this is how you create a new object and this is good for data and actions
          let calculation = new Calculation(a,b,Sum);
          Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

// where I can the values can be added without using manually input. 

3)  Liskov Substitution Principle

The principle defines that objects of the super-class shall be replaceable 
with objects of the sub-classes without breaking the application. 
It requires the objects of your sub-classes to behave in the same way as the objects of your super- class. we need to follow two rules.

class Calculation {
    //the constructor is the first method called after instantiation and usually sets the properties of the object
    constructor(a, b, op) {
        //"this" is the internal reference of the object to access its internal methods and properities
        this.a = a;
        this.b = b;
        this.op = op;
    }
}

4) Interface Segregation Principle

The interface segregation principle states that no client should be forced to depend on methods that it does not use.
This way of working splits large interfaces that aren’t very succinct, into much smaller, manageable interfaces. This approach aims to segregate logic into 
a decoupled approach that allows for ease of refactoring in the future. Take the following snippet for example. 
It strictly defines the methods that are available but takes no care for the logic that is 
contained within that method. This approach allows developers to write succinct and easy to follow code solutions.

For example:
	
 function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}

5) Dependency Inversion Principle

The High-level modules, which contains a complex logic, should be easily reusable and not affected by changes in low-level modules, it provides the utility features. to achieve that , the experts introduce an abstraction 
that decouples the high-level and low-level modules from each other.

Based on this idea, the Dependency Inversion Principle consists of two parts:
High-level modules should not depend on low-level modules. Both should depend on abstractions.
Abstractions should not depend on details. Details should depend on abstraction Explanation: That high-level & low-level modules depend on the abstraction. 
The design principle does not just change the direction of the dependency, as you might have expected when you read its name for the first time. 
It splits the dependency between the high-level and low-level modules by introducing an abstraction between them. So, in the end, you get two dependencies 1. 
The high-level module depends on the abstraction, and 2. The low-level depends on the same abstraction.

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

*** Design Patterns ***

II) OOP Design Patterns - Builder
a) Creational Patterns - Builder
Builder is a creational design pattern that lets you construct complex objects step by step. 
The pattern allows you to produce different types and representations of an object using the same construction code
For this calculator, builder can construct complex objects step by step

The JS code has a Calculation and two builder objects: 
addBuilder and subtractBuilder. The calculation's construct method accepts a Builder 
instance which it then takes through a series of assembly steps: step1 and
step2. The Builder's get method returns the newly assembled products

The user has control over the actual object construction process by 
offering different builders to the calculation. 
This pattern allows producing different types for the calculation
Example:
    function Calculation() {
    this.construct = function(builder) {
    builder.step1();
    return builder.get();
        }
    }
    function AddBuilder() {
    this.add = null;
    
        this.step1 = function() {
            this.add = new Add();
        };
     
        this.step2 = function() {
            this.ass.addParts();
        };
     
        this.get = function() {
            return this.add;
        };
    }
    function Add() {
    this.addition = 0;
    
        this.addParts = function() {
            this.doors = 4;
        };
      
    }
}

This builder will extract the object construction code out of its own class
and move it to separate objects. But I can build each operation and return them together in one
file, not multiple operations files.

b) Structural Patterns - Decorator
 This structural design pattern that we can attach new behaviors to objects by placing 
these objects inside special wrapper objects.
Example below showing that we can extending a class is a great idea to alter an object's behavior.

function Calculation() {

    this.sum = function () { return 2; };
    this.subtraction = function () { return 4; };

}
Both of the alternatives work almost the same way: 
one object has a reference to another and delegates it some work, whereas with inheritance, 
the object itself is able to do that work, inheriting the behavior from its superclass.

c) Behavioral Patterns - Template Method
Template Method is a behavioral design pattern that defines the skeleton of an
algorithm in the superclass but lets subclasses override 
specific steps of the algorithm without changing its structure
 In this calculator, the template will suggest as an example below:

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

This show how each step should call each method to have it owns operation
and then when we test it, we can just call each method run it. 
Therefore, the Template Method lets me turn a monolithic algorithm into a series of individual steps which can
be easily extended by subclasses while keeping intact the structure defined in a superclass
