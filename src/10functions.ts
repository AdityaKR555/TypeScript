// 1. Functions in TypeScript : You can specify the parameter types and return type.

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

// ----------------------------------------------

// 2. Function Types : You can store the type of a function in a variable.

let add2: (a: number, b: number) => number;

add2 = (a, b) => {
  return a + b;
};

// can also create a reusable function type:
type Operation = (a: number, b: number) => number;

const addition: Operation = (a, b) => a + b;

const multiply: Operation = (a, b) => a * b;


// ----------------------------------------------------------------


// 3. Optional Parameters : Use ?

function greet(name: string, age?: number) {
  console.log(`Hello ${name}`);

  if (age) {
    console.log(`Age: ${age}`);
  }
}

greet("Aditya");       // ✅
greet("Aditya", 21);  // ✅


// Optional parameters must come after required parameters.
// function greet(age?: number, name: string) { } // This is wrong


// -----------------------------------------

// 4. Default Parameters : You can give a parameter a default value.

function greet2(name: string, message: string = "Hello") {
  console.log(`${message}, ${name}`);
}

greet2("Aditya");
// Hello, Aditya

greet2("Aditya", "Good morning");
// Good morning, Aditya


// --------------------------------------------

// 5. Rest Parameters : Rest parameters allow you to accept any number of arguments.Use ....

function add4(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(add4(10, 20));
console.log(add4(10, 20, 30));
console.log(add4(1, 2, 3, 4, 5));

// --------------------------------------------------------


// 6. Function Overloading : Function overloading allows you to define multiple ways a function can be called.

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: number | string, b: number | string) {
  return (a as any) + (b as any);
}

combine(10, 20);        // number
combine("Hello ", "TS"); // string

// combine(10, "Hello");   // wrong