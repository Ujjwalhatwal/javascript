/*
// this keyword and arrow function
const user = {
    username : "ramkumar",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);  
    }
}

user.welcomeMessage() //ramkumar, welcome to website
user.username = "vinodkumar"
user.welcomeMessage() //vinodkumar, welcome to website

// this : gave current value of variable in object

console.log(this); // {} empty object , in node environment
// on browser it gave window object 

function chai(){
    const name = "rakesh"
    console.log(this); //<ref *1> Object [global]
    console.log(this.name) //undefined , not use this in function , use in objects 
}
chai()

*/

// arrow function
//explicit return
const sum = (num1,num2) =>{
    return num1+num2
}
console.log(sum(2,3));

// implicit return
const sum2 = (n1,n2) => (n1+n2)
console.log(sum2(2,3));

console.log(typeof sum); // function
console.log(typeof "ram"); // string
