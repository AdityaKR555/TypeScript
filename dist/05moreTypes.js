"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
let numericLength = response.length;
let bookString = '{"name":"The Greatest Samrat"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
// -----------------------------------------------------------------
const inputElement = document.getElementById("username");
// ------------------------------------------------------------------
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error: ", error);
}
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("admin");
        return;
    }
    if (role === "user") {
        console.log("user");
        return;
    }
    role; //never
}
function neverReturn() {
    while (true) {
        // ---
    }
}
//# sourceMappingURL=05moreTypes.js.map