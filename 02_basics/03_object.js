// singleton
//Object.create

//Object Literals

//Key Pair value will be used
const JsUser ={
        name : "Rishi",
        age : "28",
        email: "rishiparihar.parihar@gmail.com",
        location : "Noida",
        isUserLoggedIn : true,
        lasLoginDays: ["Monday", "Sunday"]
}
// console.log(JsUser.email); // treated as object
// console.log(JsUser["email"]); // treated as String

/********************************************************************************************** */
//How to use Symbol and how to use it:
const mySym = Symbol("key01")

const myUser = {
    [mySym] : "myKey01"
}

// console.log(myUser[mySym]);
// console.log(myUser)

/*********************************************************************************************** */
//How to freeze the objects:
JsUser.email= "rishi1@gmail.com";
//Object.freeze(JsUser);
JsUser.email= "rishi2@gmail.com";
//console.log(JsUser);

/**************************************** Functions ********************************************************* */

JsUser.greeting = function()
    {
        console.log("Hello JS User");
        console.log("Hello JS User", `${this.name}`);
    }
console.log(JsUser.greeting()); // result : undefined
console.log(JsUser.greeting); // result : [Function (anonymous)] as a reference