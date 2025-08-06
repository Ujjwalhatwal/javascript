// these are simple comparision among same datatype
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 == 1); // false
console.log(2 < 1); // false
console.log(2 <= 1); //false
console.log(2 != 1); //true

// problem arise when different datatypes are compared
console.log("2" > 1); // true
console.log("02" > 1); // true 
 
// typescript not allow to compare different datatypes
// so if you want to avoid confusion try to compare same datatypes

 // confusion => so try to avoid it
console.log(null > 0); // false
console.log(null ==  0); // false
console.log(null >= 0); // true

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false


//strict check => datatype and value must be same 
console.log("2" === 2); //false
console.log("2" === "2"); //true
console.log(2 === 2); //true
console.log("2" == 2); // true

