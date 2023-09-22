//Object Singleton.

const myUser = new Object(); 
//console.log(myUser);


const testUser = {
    userName : {
            userFullName : {
                        firstName: "Rishi",
                        lastName : "Parihar"
            }
    }
}

//console.log(testUser.userName.userFullName.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);

//by using spread operator
const spreadOp = {...obj1, ...obj2}
//console.log(spreadOp);


const JsUser ={
    name : "Rishi",
    age : "28",
    email: "rishiparihar.parihar@gmail.com",
    location : "Noida",
    isUserLoggedIn : true,
    lasLoginDays: ["Monday", "Sunday"]
}

console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));
console.log(Object.entries(JsUser));

console.log(JsUser.hasOwnProperty("age"));