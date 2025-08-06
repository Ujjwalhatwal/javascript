// property and method 
/*
Property:

1. A property is a variable attached to an object.
2. It stores data or state about the object.
3. The value can be of any type (string, number, array, etc.).
4. Accessed using dot notation or bracket notation (object.property or object["property"]).
5. Example:
   const car = { color: "red" };  // "color" is a property

Method:
1. A method is a function attached to an object.
2. It defines behavior or action the object can perform.
3. Always a function stored as a property.
4. Called using `()` syntax (`object.method()`).
5. Example:
   const car = {
     drive: function() {
       console.log("Driving...");
     }
   };  // "drive" is a method

*/ 

let myHeros = ["thor","spiderman"]
let heroPower = {
    thor : "hammer",
    spideman : "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spideman}`);   
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello.`);
}
heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh() // error 

// if you gave prower to object mean then it will access by array, string, function due it is at top level of hierarcy in prototype


// inheritance 
const user = {
    name: "chai",
    email: "xyz@example.com"
}
const Teacher = {
    makeVideo :true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let myName  = "hitesh       "
let mychannel = "chai        "

String.prototype.truelength = function(){
    console.log(`${this}`); //hitesh
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
myName.truelength()
mychannel.truelength()
"ramesh   raju".truelength()
// ramesh   raju
// True length is: 13