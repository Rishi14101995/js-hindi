//JavaScript does not have strict check thats why peoples are using typeScript

let scoreInt = "33" 
let scoreStringInt = "33avc" // output : NaN 
let scoreNull = null; // output : 0
let scoreUndefined = undefined; // output : NaN
let scoreString ="Rishi"; // output : NaN
let scoreBoolean = true;

// to check the type of variables we are using 2 syntax:
//console.log(typeof scoreInt); // output : number
//console.log(typeof(scoreInt)); // output : number

let valueInNumber = Number(scoreBoolean);
//console.log(typeof valueInNumber);
//console.log(valueInNumber)


// 1:true , 0:false
// "":false , "Rishi":true
let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn) // output : return true
//console.log(booleanIsLoggedIn)


let someNumber = 33
let convertString = String(someNumber)
console.log(convertString) // output : String 33