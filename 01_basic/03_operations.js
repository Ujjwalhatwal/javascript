// *************** operations ***************//

let value = 3
let negValue = -value
console.log(negValue); // it gives negative value
// arithmatic operations : 
console.log(2+2); // addition
console.log(2-2); // substraction
console.log(2*2); //multiplication
console.log(2/2); // division
console.log(2%2); // modulu , remainder output
console.log(2**2); // power operation

/*
basics arithmatic operations
2 + 2 = 4
2 - 2 = 0
2 * 2 = 4
2 / 2 = 0
2 ** 2 = 4 power
2 % 2 = 0 remainder , modulo 
*/


// trick question and concept
let s1 = "hello"
let s2 = " welcome"
console.log(s1 + s2);

console.log(1 + "2"); //12
console.log("1" + 2); //12
//but 
console.log("1" + 2 + 2); //122
console.log(1 + "2" + 2); //122
console.log(1 + 2 + "2");//32
console.log(1 + 2 + "2"+2+1);//3221 important

// avoid this type of use but atleast know they exist
console.log(+true); //1
console.log(+""); //2 ,0 
console.log(3*4 + 4 - 2 * 5);

// increament operator 
// decerement operator