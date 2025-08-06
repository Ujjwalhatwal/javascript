// singleton : when obj made from constructor
// with literal not singleton

// obj by constructor
// Object.create

// object is combination of (key : value pair) where key treated as string
// object are declare as literal and constructor

// object literals  : creation
const mySym = Symbol("key1")
const jsUser = {
    name : "hitesh",
    age : 18,
    location : "jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","friday"],
    "full name" : "ramesh thakur",
    [mySym] : "mykey1", // use [] to declare symbol in object
}
// access object values
console.log(jsUser.email); //hitesh@google.com , not a good way due to not access full name like key
console.log(jsUser["full name"]); // it will be auto recommanded


console.log(jsUser["email"]); // hitesh@google.com , also not good

console.log(typeof jsUser[mySym]);


// change values of objects
jsUser.email = "ramesh.gmail.com";
console.log(jsUser["email"]);
// Object.freeze(jsUser) , to freeze further update
jsUser.email = "hitesh@google.com"
console.log(jsUser);

/*
{
  name: 'hitesh',
  age: 18,
  location: 'jaipur',
  email: 'ramesh.gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'monday', 'friday' ],
  'full name': 'ramesh thakur',
  [Symbol(key1)]: 'mykey1'
}
*/

jsUser.greeting  = function(){
    console.log("hello js user");   
}
console.log(jsUser.greeting); //[Function (anonymous)], function not executed , just got reference
console.log(jsUser.greeting()); // hello js user undefined
//important
jsUser.greetingTwo  = function(){
    console.log(`hello js user ${this.name}`);    // stirng interpolation
}
console.log(jsUser.greetingTwo()); //hello js user hitesh , 

