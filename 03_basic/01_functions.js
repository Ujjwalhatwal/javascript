// functions 
// it is just a piece of code bounded in a package we can use its copy 
function sayMyName(name){
    console.log(`my name is ${name}`);
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName("ujjwal kumar");
// sayMyName : reference of function , no execution
// sayMyName() : execution

function addTwoNumbers(number1 , number2){
    console.log(number1 + number2);
}
addTwoNumbers(); //NaN not a number
addTwoNumbers(2,3) //5 
addTwoNumbers(2,) // NaN (,3) also same

addTwoNumbers(3,"a") // 3a
addTwoNumbers(3,null) // 3
addTwoNumbers(3,undefined) // NaN

/*
parameter : variables input of any datatype at function defination
argument : value pass during function call
*/

const result = addTwoNumbers(3,4);
console.log(result); // 7 undefined
// undefined as function not return anything

function addTwoNum(num1,num2){
    return num1+num2
    // console.log("ramesh");
    // after return statment nothing work as unreachable code
}
const answer = addTwoNum(12,3)
console.log(answer); // 15 as it is a return type function

function loginUserMessage(username){
    if(!username){
        console.log("please enter a vaild username");
        return
    }
    return `${username} just logged in`
} 
console.log(loginUserMessage("ujjwal kumar")); // ujjwal kumar is logged in 
console.log(loginUserMessage("")); // just logged in
console.log(loginUserMessage()); // undefined logged in,or we can use default value concept
// if not gave a variable value it use undefined wala concept

