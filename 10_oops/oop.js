
// object literal : 
const user = {
    username : 'hitesh',
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this); // current context details print 
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); //{} , in browser global context is window

// constructor function :
// const promiseOne = new Promise()
// const date = new Date()

function User(username ,loginCount , isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // return this // it is implicit defined
}
// const userOne = User("hitesh",12,true)
// const userTwo = User("ujjwal",23,false) // value are overwrite it.
// to avoid overwrite use new keyword , constructor function gave new instance every time
const userOne = new User("hitesh",12,true)
const userTwo = new User("ujjwal",23,false) // value are overwrite it.
console.log(userOne);
console.log(userTwo);

/*
Here’s the working process of the `new` keyword in JavaScript in simple points:

1. Creates a new empty object.
2. Sets the prototype of the new object to the constructor's `prototype`.
3. Binds this to the new object and calls the constructor function.
4. Returns the new object, unless the constructor explicitly returns a different object.

*/ 

// prototype : har nahi mana , layer ke andar jate jana , 