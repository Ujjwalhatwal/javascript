// 
const userEmail = "hitesh@ai.com"

if(userEmail){
    console.log("got your email");
}else{
    console.log("don't have user email")
}

// falsy values  : false,0,-0,"",null,underfined,NaN
// otherwise all are true
// truthy values :
// "0" , 'false' , " " , [] , {} , function(){} 

const emptyArray = []
if(emptyArray.length === 0) console.log("empty array");

const emptyObj = {}
if(Object.keys(emptyArray).length === 0) 
    console.log("empty object");


// interview
// false == 0 => true
// false == '' => true
// '' == 0 => true

//IMP :  nullish coalescing operator (??) : null undefined
// it check saftly if null occur
let val1;
val1 = 5 ?? 10 // output 5
val2 = null ?? 10 // output 10
val3 = undefined ?? 50 // output 50
console.log(val1);
console.log(val2);
console.log(val3);


// ternary operator
// condition ? true : false
const iceTea = 100
iceTea >= 30 ? console.log("greater than 30") : console.log("less than 30");
