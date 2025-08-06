const accountId = 14453
let accountEmail = "ujjwal@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur" // not use it , it is although possible

// accountId = 2 //TypeError: Assignment to constant variable.
// console.log(accountId);

accountEmail = "chh@gmail.com"
accountPassword = "87766578"
accountCity = "delhi"
console.table([accountId,accountEmail,accountPassword,accountCity]);


let accountState;
console.log(accountState); // undefined , if you not assign value to variable by default

/*
prefer not use var 
because of issue in block scope {}  and functional scope -inside a function
*/


// function solve() {
//     var age = 25;
//     console.log(age);
// }
// // console.log(age);   It gives error that age is not define, functional scope

// { 
// let a = 10;
// console.log(a);
// }
// console.log(a); // this gives error bcz let is block scope


// same variable using let not define twice 
// let num = 10
// let num = 400 // it give error as num define above 
// num = "anything or any datatype you use here" 


