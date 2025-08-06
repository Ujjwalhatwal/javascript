// ["","",""]
// [{} ,{} ,{}]

// for of loop :

const arr = [2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greeting = "hello world!"
for (const greet of greeting) {
    console.log(`each char is ${greet}`);
}

// maps : it is an object holds key value pair
// remember the order of insertion
const map = new Map()
map.set('IN' ,'INDIA')
map.set('USA' ,'United States of America')
map.set('Fr' ,'France')
map.set('IN' ,'India')
// two similar keys are not store, it takes it as update value of that key
console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

for (const key of map) {
    console.log(key);
}
/* output : 
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

for (const [key,value] of map) {
    console.log(key , ' :- ' , value);
}
/* destructure the array : output
IN  :-  India
USA  :-  United States of America
Fr  :-  France
*/

for (const key in map) {
    console.log(key);
} // output : nothing print
// maps are non iterable.


// object is not iteratable by forof loop 

