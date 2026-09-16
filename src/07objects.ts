// 1. Objects in TypeScript

// You can explicitly define the shape of an object using either type or interface.

// Using type:
type User = {
  name: string;
  age: number;
  email: string;
};

const user: User = {
  name: "Aditya",
  age: 21,
  email: "aditya@example.com"
};

// Using interface:
interface User2 {
  name: string;
  age: number;
  email: string;
}

const user2: User2 = {
  name: "Aditya",
  age: 21,
  email: "aditya@example.com"
};


// -----------------------------

// 2. Partial<T> : Makes all properties optional.

type User3 = {
  name: string;
  age: number;
  email: string;
};

const updateUser: Partial<User3> = {
  name: "Ram"
};

// Normally User requires all three properties.
// But Partial<User> changes it to:
// {
//   name?: string;
//   age?: number;
//   email?: string;
// }
// Common use: updating only some fields.

// ---------------------------------

// 3. Required<T> : Opposite of Partial, It makes all optional properties required.

type User4 = {
  name: string;
  age?: number;
};

const user4: Required<User4> = {
  name: "Aditya",
  age: 21
};

// Without Required, age could be omitted.
// With Required, it must be present.


// ----------------------------------------------


// 4. Readonly<T> : Makes properties read-only.

type User5 = {
  name: string;
  age: number;
};

const user5: Readonly<User5> = {
  name: "Aditya",
  age: 21
};

user.age = 22; // ❌ Error

// Useful when you don't want an object to be modified.


// -----------------------------------------


// 5. Pick<T, K> : Selects only the properties you want.

type User6 = {
  name: string;
  age: number;
  email: string;
  password: string;
};

type PublicUser = Pick<User6, "name" | "age">;

const user6: PublicUser = {
  name: "Aditya",
  age: 21
};

// PublicUser becomes:
// {
//   name: string;
//   age: number;
// }


// -------------------------------------------

// 6. Omit<T, K> : The opposite of Pick, It removes the properties you specify.

type User7 = {
  name: string;
  age: number;
  email: string;
  password: string;
};

type SafeUser = Omit<User7, "password">;

const user7: SafeUser = {
  name: "Aditya",
  age: 21,
  email: "aditya@example.com"
};


// -----------------------------------------------------

// 7. Record<K, T> : Creates an object where you define the keys and value type.

type UserRoles = Record<string, string>;

const roles: UserRoles = {
  aditya: "admin",
  ram: "user",
  rahul: "editor"
};

// key   → string
// value → string

type Scores = Record<string, number>;

const scores: Scores = {
  Aditya: 90,
  Ram: 85,
  Rahul: 92
};

// key   → string
// value → number