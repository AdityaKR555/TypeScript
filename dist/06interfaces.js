"use strict";
// Interfaces in TypeScript are basically a way to define the structure/shape of an object.
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "Aditya",
    age: 21
};
function printUser(user) {
    console.log(user.name);
    console.log(user.age);
}
printUser({
    name: "Aditya",
    age: 21
});
const user2 = {
    name: "Aditya",
    age: 21 // valid as email is optional
};
const admin = {
    name: "Aditya",
    age: 21,
    role: "admin"
};
// They both are often used for the same purpose.
// interface → commonly used to describe object/class structures.
// type → more flexible; can represent unions, primitives, tuples, etc.    type ID = string | number;
//# sourceMappingURL=06interfaces.js.map