// 1. public : Accessible everywhere.

class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Aditya");

console.log(user.name); // ✅

// public is actually the default, so this is equivalent:

// class User {
//   name: string;
// }

// ----------------------------------------------------------------------------

// 2. private : Accessible only inside the same class.

class User {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }

  checkPassword() {
    console.log(this.password); // ✅
  }
}

const user = new User("12345");

user.checkPassword(); // ✅
console.log(user.password); // ❌ Error

// Inside class       → ✅
// Outside class      → ❌
// Child class        → ❌

// -----------------------------------------------------------

// 3. protected : Accessible inside the same class + child classes.

class User {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Admin extends User {
  showName() {
    console.log(this.name); // ✅
  }
}

const admin = new Admin("Aditya");

admin.showName(); // ✅
console.log(admin.name); // ❌


// Inside class       → ✅
// Child class        → ✅
// Outside class      → ❌

// --------------------------------------------------------------------

// public     → Everyone
// protected  → Class + Children
// private    → Only this Class