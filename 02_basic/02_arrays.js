// array 2 : 

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // flash


// it show dc_heros as a single element
// marvel_heros become array of array

const combine_heros = marvel_heros.concat(dc_heros);
console.log(combine_heros);

// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] ,it join both array and return a new array without affecting the original. 

// spread operation on array : join two array
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

// flat(depth : kha tak apko merge chaiye) function 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// to check and convert into array
console.log(Array.isArray("hitesh")); // false for it. true/false
console.log(Array.from("hitesh")); //[ 'h', 'i', 't', 'e', 's', 'h' ]

//interview question
console.log(Array.from({name : "hitesh"})); // [] empty array
// you have to define that make array from keys , values

// use array.of(set of element) return new array by element
let score1 = 1500
let score2 = 2500
let score3 = 3500  
console.log(Array.of(score1,score2,score3)); //[ 1500, 2500, 3500 ]

//read  more about .of() , .from() , .isArray()