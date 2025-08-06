"use strict"; // treat all JS code as newer version 
// by nowdays no need to write it

// alter("hello")  // ReferenceError: alter is not defined in node js , it is in browser

// code readability should be high
// ecma script , mdn for reading
console.log(3+3);
console.log(4+4);

let name = "ujjwal"
let age = 18
let isLoggedIn = false

/*
datatype

number => 2 to power 53
bigint
boolean => true/false
null => standalone value , type of null is object 
undefined => value not define yet , type of undefined is underfined
string => "" , '' , ''' for block of code '''
symbol => unique
object 

*/

let s = 'ehllo'
let t = "hello"
console.log(s+" " +t);

console.table([typeof age,typeof string , typeof null,typeof Object,typeof undefined]);

// typeof undefined is undefined
// but typeof null is object
