// numbers in js : 
const score = 400
console.log(score); // output : 400

const balance = new Number(100)
console.log(balance);
 // output : [Number: 100]

console.log(balance.toString());  // convert to string
console.log(balance.toString().length)
 
console.log(balance.toFixed(2)); // no. after decimal // 100.00
const otherNum = 1223.8966
console.log(otherNum.toPrecision(3)); // 23.9 for 23.8966 , 1233.8966  => 1.22e+3


const hundreds = 10000000000;
console.log(hundreds.toLocaleString()); // us std
console.log(hundreds.toLocaleString('en-IN')); //indian std 10,00,00,00,000


// maths in js : it is by default library 

console.log(Math); //Object [Math] {}
console.log(Math.round(4.7));
console.log(Math.ceil(4.7));
console.log(Math.floor(4.7));
console.log(Math.abs(-4.7));
console.log(Math.sqrt(25));
console.log(Math.PI)
console.log(Math.min(2,3,4,5,1))
console.log(Math.max(2,3,4,5,1))


console.log(Math.random()); // output : b/w 0 to 1 exclusive
console.log(Math.floor(Math.random() * 10) + 1); // to get a number between 1 to 10 inclusive
 

// important : 
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


