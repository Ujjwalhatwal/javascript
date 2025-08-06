// immediately invoked function expressions (iife)

function chai() {
    console.log(`DB CONNECTED`);
}
chai(); //automatic semicolon insertion (ASI). 

( function chai2(){
    console.log(`DB CONNECTED 2`);
})(); // unnamed iife

( (name) => {
    console.log(`DB CONNECTED 3 ${name}`);
})("ramesh"); // named iife

// similar as (function parameters) => (execution)
// in iife (function)(call)


// to avoid global scope pollution which sometime create problems.

// go to browser => inspect => source => snippets => there check about call stack 
function one() {
    console.log("one")
    two()
}
function two() {
    console.log("two")
    three()
}
function three() {
    console.log("three")
}
one()
two()
three()
 // check how the calls work in call stack => lifo