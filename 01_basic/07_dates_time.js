// date time beginning of jan 01 1970


let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

/* 
Mon May 19 2025 15:12:49 GMT+0530 (India Standard Time)
Mon May 19 2025 => todatestring
19/5/2025 => tolocalstring
object => type of date
*/

console.log(myDate); //2025-05-19T09:44:19.420Z

let myCreateDate = new Date(2025,0,13)  // months in js start from 0 index 0 = jan
console.log(myCreateDate.toDateString()); // 13/1/2025, 12:00:00 am
console.log(myCreateDate.toLocaleString()); //Mon Jan 13 2025

let myCreateDate1 = new Date(2025,0,13,5,4) //13/1/2025, 5:04:00 am
console.log(myCreateDate1.toLocaleString());
 
// let myCreateDate2 = new Date("2025-06-13") // yy- mm -dd 
let myCreateDate2 = new Date("01-20-2024") // mm - dd - yy , but dd-mm-yy not support
console.log(myCreateDate2.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1747648529044 mille second till i jan 1970
console.log(myCreateDate.getTime());

// to compare date always in mille second 
console.log(Math.floor(Date.now()/1000));


// some more methods : 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()); // 1 as monday
console.log(newDate.getMonth()+1); // 0 as jan so we add 1 in this 

let str = ` the date is :${newDate.getDate()} and the time is ${newDate.getHours()}`
console.log(str);

// more : to make customize date format
newDate.toLocaleString('default',{
    weekday : "long",
    timeZone : ''
})

// to get properties of a function vs code use ctrl + space 