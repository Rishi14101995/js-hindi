// arrays

const myArr = [0,1,2,3,4,5]
const myheroes = ["Rishi", "ABC"]
const mynumber = new Array(1,2,4,5,6,7)

// console.log(myArr[1]);
// console.log(myheroes[1]);
// console.log(mynumber[1]);

//Array Methods
// myArr.push(7); //->  Adding new element into the arrayList
// myArr.pop(); //-> Remove the last element from the arrayList 

//myArr.unshift(9); // -> adding new element into the first position always
//myArr.shift(); // -> shift the first element to left side.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4)); //Return the element position *index

const newArr = myArr.join() //-> convert Array into String 
// console.log(newArr);
// console.log(typeof newArr);

//slice and splice [Interview Questions]

// Slice : It will fetch the value from start to end-1 position and does not manipulate the original array.
// Splice : It will fetch the value from start to end position and does manipulate the original array.
console.log("A" , myArr); // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3);
console.log(myn1); // [ 1, 2 ]
console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1,3)
console.log(myn2); [ 1, 2, 3 ]


console.log("C", myArr); // C [ 0, 4, 5 ]
 