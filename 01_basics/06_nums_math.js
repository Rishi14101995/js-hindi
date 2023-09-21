/******************************* Numbers *************************************************/
const score = 50
// console.log(score);

const balance = new Number(500)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));

const otherNumber = 23.8996
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


/**********************************MATHS***********************************************/
//By Default library comes with javascript and it is powerful library.

console.log(Math.abs(-8));
console.log(Math.round(4.5));

console.log(Math.ceil(4.2)); // upper value
console.log(Math.floor(4.7)); // lower value 

console.log(Math.sqrt(36));

console.log(Math.min(2,5,8,10,16,0));

console.log(Math.random()); //value printed between 0 to 1
console.log((Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 