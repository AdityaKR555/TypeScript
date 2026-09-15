let subs: string | number = "7M"; // 'subs' can be either a string or a number
subs = 7000000; // Valid assignment since 'subs' can be a number
subs = true; // Error: Type 'boolean' is not assignable to type 'string | number'

let apiReqStatus : "success" | "failure" | "pending"; // 'apiReqStatus' can only be one of the specified string literals
apiReqStatus = "success";

let airlineSeat : "aisle" | "window" | "middle" = "aisle"; // 'airlineSeat' can only be one of the specified string literals

const orders = [2,4,6,8,10];

let currentOrder: number | undefined;

for(let order of orders){
    if(order === 8){
        currentOrder = order; 
    }
}

console.log(currentOrder); 


