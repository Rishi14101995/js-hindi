function addTwoNumber(number1, number2)
{
    console.log(number1 + number2);
}
addTwoNumber(3, 5)


function multiplyTwoNumber(number1, number2)
{
   let result = number1 * number2
   return result
}

const result = multiplyTwoNumber(3, 5)
console.log("Result:" + result);

/*********************************************************************** */

function loggedInUser(username = "sam")
{
    if(!username)
    {
        console.log("Please enter a username");
    }
    return `${username} just logged in`

}
console.log(loggedInUser("Rishi"));
//console.log(loggedInUser()); //=> undefined