
// arrays variable size in js
// shallow copy always 

// arrays 

const myArr = [0,1,3,4,5]
const myHeros = ["shaktiman","nagraj"]
console.log(myArr[1]);

const myArr2 = new Array(1,2,3,4)

// array methods
myArr.push(6)
myArr.push(7) // to add value in end of array
myArr.pop() //  to pop last value of array

myArr.unshift(9) // to add value in start of array
myArr.shift() // to remove value from starting of array remove 9
myArr.shift() // to remove value from starting of array remove 0

console.log(myArr);


console.log(myArr.includes(9)); // true/false
console.log(myArr.indexOf(3)); 
// idx or -1 if num not exist in array, zero based indexing

const newArr = myArr.join() // convert array to string
console.log(typeof myArr); // array type is object 
console.log(typeof newArr); // but its type is string.


// slice and splice operation
console.log("A : " , myArr); 
const myn1 = myArr.slice(1,3)  
console.log("slice : " ,myn1);
console.log("B : " , myArr); 

const myn2 = myArr.splice(1,3);
console.log("splice : " ,myn2);
console.log("C : " , myArr);

/*
A :  [ 1, 3, 4, 5, 6, 7 ]
slice :  [ 3, 4 ]
B :  [ 1, 3, 4, 5, 6, 7 ]
splice :  [ 3, 4, 5 ]
C :  [ 1, 6, 7 ]
*/
/*
slice : it does not affect the original array
        and arr.slice(m,n) m include but n not include
splice : it affect the original array by remove particular part from array
        and arr.splice(m,n) both side inclusive,last range include
*/