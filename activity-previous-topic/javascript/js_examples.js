// Hoisting of var
// x = 5;

// console.log(x);
// var x;

// return undefined
// console.log (greeter);
// var greeter = "say hello"


// generator function
// function* generateNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }

// let arr = [];
// for (const val of generateNumbers()){
//     arr.push(val);
// }

// console.log(arr);

// OOP in js

//Classes
class Person{
    //properties
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //method
    sayHello(){
        console.log(`Hello, my name is ${this.name} and I'm ${this. age} years old. `);
    }
}

//Object
// const person1 = new Person("Alice", 25);
// const person2 = new Person("Bob", 30);

// access on the method
// the output will based on  the class Person
// person1.sayHello()
// person2.sayHello()

//Inheritance
class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name}, ${this.age} years old, and I'm studying ${this.major}.`);
    }
}

//Object
// const student1 = new Student("Alice", 25, "Physics");
// const student2 = new Student("Bob", 30, "Math");

// access on the method
// the output will be based on the class Student
// student1.sayHello()
// student2.sayHello()

// TODO:
//Encapsulation -- indi ko pa magets
class BankAccount {
    constructor(balance){
        let _balance = balance; // private property

        this.getBalance = () => _balance;

        this.deposit = amount => {
            if (amount > 0){
                _balance += amount;
            }
        };

        this.withdraw = amount => {
            if (amount > 0 && amount <= _balance){
                _balance -= amount;
            }
        }
    }
}

// TODO: i don't know how to print the output
//Polymorphism -- allows different classes to implement the same method in different ways.
class Shape {
    getArea() {
        throw new Error("getArea() method not implemented.");
    }
}

class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape{
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height
    }
}


// let shape = new Shape();
let circle = new Circle(50);
let rectangle = new Rectangle(50, 20);


// shape.getArea()
circle.getArea(50)
rectangle.getArea(50, 20)


//TODO: study abstraction 