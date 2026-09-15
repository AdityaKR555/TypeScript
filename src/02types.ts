// Inference

let name = "Aditya"; // TypeScript infers the type of 'name' as 'string'
name = "Ram"; 
name = 123; // Error: Type 'number' is not assignable to type 'string'

// Annotations

let age:number = 21; // Explicitly annotating the type of 'age' as 'number'

age = 25; // Valid assignment
age = "twenty"; // Error: Type 'string' is not assignable to type 'number'

console.log(`Name: ${name}, Age: ${age}`);