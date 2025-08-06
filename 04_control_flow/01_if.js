// if statement
// syntax : if(conditon){statement executed}

 // if(true) always run, if(false) not run

const isUserLoggedIn = true
if(isUserLoggedIn){
    console.log(`welcome to js course sir`);
}

// comparison operator : < , > , <= ,>= , == , != , ===

if (2 == "2") {
    console.log("executed no. equal to string. by ==");
}
if (2 ==="2") {
    console.log("executed no. equal to string. by ==");
} // it not run as (2 === "2" ) false as datatype not same

if(null) console.log("executed"); // not run
if(undefined) console.log("executed"); // not run
if(false) console.log("executed"); // not run
if("") console.log("executed"); // not run
if(0) console.log("executed"); // not run
if(1) console.log("executed"); // run 


// scope 
const score = 200
if(score > 100){
    var power = "fly"
    console.log(`user power : ${power}`);
}
console.log(`user power : ${power}`); // executed if power declared as var and not executed if power declare as let
// it is because of let is block scope and var is functional scope

// possible but not good practice
// if(balance > 100) console.log("test"),console.log("ram");

// nested if else
let balance = 100
if(balance < 100){
    console.log("less than 100");
}else if(balance < 200){
    console.log("less than 200");
}else if(balance < 500){
    console.log("less than 500");
}else if(balance < 1000){
    console.log("less than 1000");
}else{
    console.log("greater than 1000");
}


// real life
const userLoggedIn = true
const debitcard = true
// || , && , ! 
if(userLoggedIn && debitcard && 2 == 2){
    console.log("allow to buy course");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user is logged in");
}