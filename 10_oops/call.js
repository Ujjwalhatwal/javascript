function setUserName(username){
    //complex DB call
    this.username = username
    console.log("called");
    
}
// call : Calls a method of an object, substituting another object for the current object
function createUser(username,email,password){
    setUserName.call(this,username)

    // this.username = username
    this.email = email
    this.password =password
}

const chai = new createUser("chai","chai@fb.com","1234")
console.log(chai);
//createUser { email: 'chai@fb.com', password: '1234' }