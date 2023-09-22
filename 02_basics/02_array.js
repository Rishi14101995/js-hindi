const temp1 = ["A", "B" , "C"]
const temp2 = ["X", "Y", "Z"]

//push() : Appends new elements to the end of an array, and returns the new length of the array.
//temp1.push(temp2);
// console.log(temp1);
// console.log(temp1[3][0]);

//concat() : Combines two or more arrays. 
//This method returns a new array without modifying any existing arrays.
// const temp3 = temp1.concat(temp2);
// console.log(temp3);

//spread operator : It will merge both the arrays and return the new array elements (Shortcut)
const temp4 = [...temp1, ...temp2];
console.log(temp4);

//flat() : Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const one_array_examp= [1,3,4, [3,6] , 8 , 9, [4,6,8,[9,4,5]]]
const result = one_array_examp.flat(Infinity);
console.log(result);

console.log(Array.isArray("Rishi"));
console.log(Array.from("Rishi")); //Creates an array from an iterable object.

let a = 100
let b = 200
let c = 300
console.log(Array.of(a, b, c)) //Returns a new array from a set of elements.