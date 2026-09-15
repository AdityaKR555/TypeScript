// Interfaces in TypeScript are basically a way to define the structure/shape of an object.

// 1. Basic example

interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "Aditya",
  age: 21
};

// 2. Interface with a function

interface User {
  name: string;
  age: number;
}

function printUser(user: User) {
  console.log(user.name);
  console.log(user.age);
}

printUser({
  name: "Aditya",
  age: 21
});


// 3. Optional properties, Use ?:

interface User {
  name: string;
  age: number;
  email?: string;
}

const user2: User = {
  name: "Aditya",
  age: 21               // valid as email is optional
};


// 4. Interface can be extended

interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "Aditya",
  age: 21,
  role: "admin"
};


// Interface vs type

type Ak = {
  name: string;
  age: number;
};

interface Akr {
  name: string;
  age: number;
}

// They both are often used for the same purpose.

// interface → commonly used to describe object/class structures.
// type → more flexible; can represent unions, primitives, tuples, etc.    type ID = string | number;