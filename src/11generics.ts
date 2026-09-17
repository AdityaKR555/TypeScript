// Generics let us write reusable code while still preserving type safety.
// <T> = "I'll tell you the actual type when I use this."

// 1. Basic Generic
function identity<T>(value: T): T {     //Here T is a placeholder for a type.
  return value;
}

const name = identity<string>("Aditya");
const age = identity<number>(21);


// ---------------------------------------------------


// 2. Generic Functions
function getFirst<T>(items: T[]): T {
  return items[0] as T;
//   return <T>items[0];
}

const firstNumber = getFirst([10, 20, 30]);
// number

const firstName = getFirst(["Aditya", "Ram", "Rahul"]);
// string

// Same function works with different types
// Without generics, you might have to write separate functions
// Generics let you avoid that duplication.


// --------------------------------------------------------

// 3. Generic Interface

interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

const userResponse: ApiResponse<string> = {
  data: "Aditya",
  success: true,
  message: "User found"
};

const ageResponse: ApiResponse<number> = {
  data: 21,
  success: true,
  message: "Age found"
};


// ------------------------------------------------------------

// 4. Generic Classes

class Storage<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

// ----
const numberStorage = new Storage<number>();

numberStorage.add(10);
numberStorage.add(20);

console.log(numberStorage.getAll());

// ----
const stringStorage = new Storage<string>();

stringStorage.add("HTML");
stringStorage.add("CSS");

console.log(stringStorage.getAll());


// ----------------------------------------------------


// 5. Multiple Generic Types

function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair("Aditya", 21);