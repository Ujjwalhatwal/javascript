/*
conversion of operation

string to number :
if string is contain only number => the  number  is extracted 
otherwise   NaN   is recevied
*/

let score = "33"
console.log(typeof(score)); // "33" => string

let valueInNumber = Number(score);
console.log(typeof score); // 33 =>number , gurantee
console.log(typeof valueInNumber); //number
console.log(valueInNumber); // "33a" => it get NaN
console.log(typeof NaN); // it is a number

let value = Number(null);
console.log(value); // it give 0 on conversion of null
console.log(typeof value);
console.log(Number(undefined)); // NaN
console.log(Number(true)); // boolean 1 for true and 0 for false

/*
"233" => 233
"233aa" => NaN (not a number)
boolean => 0 and 1 for false and true respectively
undefined => NaN
null => 0
*/

// boolean conversion
let isLoggedIn = 1;
let isLoggedInBoolean = Boolean(isLoggedIn)
console.log(isLoggedInBoolean); // return true
console.log(Boolean(undefined)); // false 
console.log(Boolean(null)); // false
console.log(Boolean("a")); // empty string => false , otherwise always true

// string conversion
let someNumber = 23
let someStringNumber = String(someNumber)
console.log(someStringNumber); // direct convert
console.log(String(null));
console.log(String(undefined));
console.log(String(true));
// outputs : 
//null
//undefined
//true
