//JavaScript does not have strict check thats why peoples are using typeScript

// ******************************Conversion*********************************** //
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
//console.log(convertString) // output : String 33



// ******************************Operations*********************************** //

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(11%3)
// console.log(2**2)

// let str1 = "hello"
// let str2 = " Rishi"

// let str3 = str1 + str2
// console.log(str3 + 2)

// console.log(+true); // 1

//Important poin
let gameCounter = 100
gameCounter++

// console.log(gameCounter);

//Postfix Increment
let x = 3
const y = x++
//console.log(x , y); // x:4 y:3

//Prefix Increment
let a = 3
const b = ++a
//console.log(a, b); // a:4 b:4

//Postfix Decrement
let c = 3
const d = c--
console.log(c , d); // c:2 d:3

//Prefix Decrement
let m = 3
const n = --m
console.log(m , n); // m:2 n:2

