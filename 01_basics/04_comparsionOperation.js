
//Javascript allows you to compare two different type of data types values.
// // TypeScript does not allow you to compare two different type of data types values.
console.log("2" > 1);

console.log("---------------------------------------------------------------------");
console.log("Avoid These Types of Conversion and it will create confusion");
console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); // true -> it will convert null to 0


console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); // false

console.log("---------------------------------------------------------------------");

// Strict Check : It will check your values as well as Data Types
// Syntax : ===

console.log("2" === 2); //output : false
