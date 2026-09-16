class Music{
    constructor(public name: string, public size: number, public isFree: boolean, public artist: string){}
}

let m1 = new Music("Woh", 7, true, "Badshah");
let m2 = new Music("Maati", 7, true, "MC Square");

console.log(m1);
console.log(m2);