// singleton object created with help of constructor
const tinder = new Object();
// console.log(tinder); // print empty object {}
const tinder2 = {}
// console.log(tinder2); // print empty object  {}
 
// only difference b/w tinder and tinder2 is one is singleton and other is non singleton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "rakesh"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
// { id: '123abc', name: 'rakesh', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        firstname : "ramesh",
        lastname : "hatwal"
    },
    contact : 9876543210
}
console.log(regularUser.fullname);
console.log(regularUser["fullname"]);
// { firstname: 'ramesh', lastname: 'hatwal' }
console.log(regularUser["fullname"]["lastname"]); //hatwal
console.log(regularUser.fullname?.firstname); // ? for optional chaining, use while using api

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// to merge two objects
const obj3 = {obj1,obj2}
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } // it is object of object which no suitable

// use assign method
const obj4 = Object.assign({},obj1,obj2) // {} it act target,sourse to store object , it is not compulsory but a best practice
// in assign function all values goes to first parameter , if not use {} it goes to obj1 
console.log(obj4); // correct way to merge two objects 
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



// most use : spread type
const obj5 = {...obj1,...obj2}
console.log(obj5);

// when values come from database , come in for of array of objects
const users = [
    {
        id : 1,
        email : "xyz@gmail.com",
        name : "champak",
        vaild : true
    },
    {
        id : 2,
        email : "hhkjkyz@gmail.com",
        name : "kapish",
        vaild : false
    },
    {
        id : 3,
        email : "fafdkz@gmail.com",
        name : "chuji",
        vaild : false
    }
]

console.log(users[1].email);


// some important methods of objects :
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // to get array of  all keys
console.log(Object.values(tinderUser)); // to get array of all values
console.log(Object.entries(tinderUser)); // array of array of [key, value] pair
//[ [ 'id', '123abc' ], [ 'name', 'rakesh' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // return true / false
