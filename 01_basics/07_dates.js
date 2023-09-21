// ******************************* Date ******************************//

let myDate = new Date();
console.log(myDate);

console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toLocaleTimeString());

console.log(myDate.toUTCString());

//Interview Question: what is the type of Date ? 
// Ans : Date is a Object Type.

console.log(typeof myDate)


let myCreatedDate = new Date(2023 , 0, 23 , 6, 6)
// console.log(myCreatedDate.toUTCString());

let myCreatedDateFormat = new Date("2023-01-14");
// console.log(myCreatedDateFormat);

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

//convert milliseconds to seconds and always use .round() and floor()
console.log(Math.floor(Date.now()/1000));

console.log(myCreatedDate.toLocaleString( 'default' , {
    weekday : "long"    
}
))

