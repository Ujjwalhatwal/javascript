/*
data types -> 
1.primitive :  7 types -> 
    String => "" , '' , anything inside single and double quote
    Number => any number
    Boolean => true/false
    null => assign value is null
    undefined  => not assign value to variable
    Symbol => Symbol('anything here') use to provide uniqueness
    BigInt => simple add n end of number . ex => 123456543n
                 
2.non - primitive (reference type)
    Arrays => [ values ]
    Objects => { key : values }
    Functions => use function keyword
    
in javascipt , not need to define the datatype like in java , c 
in this just use : var,const,let

JavaScript is a dynamically typed language, which means that the data types of variables are determined by the value they hold at runtime and can change throughout the program as different values are assigned to them

let a;
a = 0; // a is a number
console.log(a); // Output: 0
a = 'Hello world'; // a is a string
console.log(a); // Output: 'Hello world'
a = { key: 'value' }; // a is an object
console.log(a); // Output: { key: 'value' }
*/


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId); //false


//reference datatypes 
//array
const friends = ["rai","sagar","ups","sps","sajal","vishant","himanshu","shobhit"]
console.log(friends);
console.log(typeof friends); // objects

// objects
let myObj = {
    // key : value
    name : "ujjwal",
    roll_no : 177,
    marks : 23.23,
}
console.log(myObj);

const myFun = function() {
    console.log("hello js");
}

let aStr = "hello\
my name is khan\
welcome to the world\
"
// to write a paragraph of multiple line use backtick at end of each line
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)



// leacture 10 : stack and heap memory in javascript 

// stack : primitive , heap : non - primitive  => important 

let myName = "hitesh";
let anotherName = myName; //a copy of actual variable , deep copy actually stack memory pe hi copy create , if change in one not reaflect on other , two different entity
myName = "ramesh"
console.log(myName); // ramesh
console.log(anotherName); // hitesh

let userOne = {
    email : "user@google.com",
    upi : "user@sbi"
}

let userTwo = userOne;
userOne.email ="raju@gmail.com" 
console.log(userOne); 
 // sallow copy , if change in one reflect on other , not different entity same value or memoryn(heap par) access by two variables 
console.log(userTwo);

 