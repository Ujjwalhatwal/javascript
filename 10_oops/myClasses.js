// // ES6

// class user{
//     constructor(username,email,password){
//         this.username = username
//         this.email =email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeName(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new user("chai","chai@google.com","45678")
// console.log(chai.encryptPassword()); // 45678abc
// console.log(chai.changeName()); //CHAI


// behind the scene

function User(username,email,password){
    this.username = username
    this.email =email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changeName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@google.com","378")
console.log(tea.encryptPassword());
console.log(tea.changeName());
