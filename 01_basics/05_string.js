//Modern Way of String Representation:
//String Interpolation : ${variable name}

//String Declaration - Syntax 1
const name = "Rishi"
const courseCount = 50

console.log(`My Name is ${name} and the final count is ${courseCount}`);


//String Declaration - Syntax 2

const gameName = new String("Rishi")
//Access Key Values pair
console.log(gameName[0]);
//
console.log(gameName.__proto__);

console.log(gameName.charAt(3));
console.log(gameName.indexOf("h"));
  
//subString() -> Negative values cant accept
const newString = gameName.substring(1,3)
console.log(newString) // is -> 0th and 1st Position Only

//Slice() -> You will give negative value also and it print starts from backwards
const anotherString = gameName.slice(-2, 5)
console.log(anotherString);


//trim() -> Remove extra spaces from both position left and right
//trim method working on white spaces and line terminators.
const trimExampleString = "      Rishi          "
console.log(trimExampleString);
console.log(trimExampleString.trim());


//Replace() -> It will replace your value with existing one
const url = "http://hitesh.com/hitesh%20rishi";

console.log(url.replace('%20', '-'))

console.log(url.includes('rishi'))

//split() -> it will break your string as per your argument separator passes into that method and converted into array list.
const firstName = "Rishi-Singh-Parihar"
console.log(firstName.split('-'))


