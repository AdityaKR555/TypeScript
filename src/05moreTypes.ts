let response : any = "42";

let numericLength : number = (response as string).length;

// --------------------------------------------------------------

type Book = {
    name: string;
};

let bookString = '{"name":"The Greatest Samrat"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);

// -----------------------------------------------------------------

const inputElement = document.getElementById("username") as HTMLInputElement;

// ------------------------------------------------------------------

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error: ", error);
}

// ----------------------------------------------------------------------

type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void {
    if(role === "admin"){
        console.log("admin");
        return;
    }
    if(role === "user"){
        console.log("user");
        return;
    }
    role; //never
}

function neverReturn(): never {
    while(true){
      // ---
    }
}
