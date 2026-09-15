"use strict";
// TypeScript sometimes knows that a variable can have multiple types:
// let value: string | number;
// Here value can be either a string or a number.
Object.defineProperty(exports, "__esModule", { value: true });
// Type narrowing means checking what type it actually is, so TypeScript can safely treat it as that specific type.
// 1. typeof — most common
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
// 2. Array.isArray()
function printData(data) {
    if (Array.isArray(data)) {
        console.log(data.length); // TypeScript knows it's an array
    }
    else {
        console.log(data.toUpperCase()); // TypeScript knows it's a string
    }
}
// 3. Truthiness narrowing
function printMessage(message) {
    if (message) {
        console.log(message.toUpperCase()); // TypeScript knows it's a string
    }
    else {
        console.log("No message provided.");
    }
}
// 4. Equality narrowing
function compareValues(value1, value2) {
    if (value1 === value2) {
        console.log("Values are equal.");
    }
    else {
        console.log("Values are not equal.");
    }
}
// 5. instanceof
function printDate(date) {
    if (date instanceof Date) {
        console.log(date.toISOString()); // TypeScript knows it's a Date
    }
    else {
        console.log(date.toUpperCase()); // TypeScript knows it's a string
    }
}
// or
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark(); // TypeScript knows animal is Dog
    }
    else {
        animal.meow(); // TypeScript knows animal is Cat
    }
}
const dog = new Dog();
const cat = new Cat();
makeSound(dog); // Woof!
makeSound(cat); // Meow!
let film = {
    industry: "Bollywood",
    size: 300
};
if (film.industry === "Bollywood") {
    console.log("Bollywood film:", film.size);
}
else {
    console.log("Hollywood film:", film.size);
}
film = {
    industry: "Hollywood",
    size: 180
};
//# sourceMappingURL=04typeNarrowing.js.map