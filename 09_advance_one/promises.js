//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//A Promise is in one of these states:
//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.

// generally we consume promises , we can create it also 
// before promises in js (ES6) , Q and blueBird library use 

const promiseOne = new Promise(function(resolve, reject){
    // do an asyn task
    // db calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
});
// resolve direct related to then
promiseOne.then(function(){
    console.log('promise consumed resolve 1');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    }, 1000);
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username : "chai",email : "chai@example.com"})
    },1000)
});

promiseThree.then(function(user){
    console.log(user);
}) //{ username: 'chai', email: 'chai@example.com' }

const promiseFour =  new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username : "ramesh",password : 1123})
        }else{
            reject('ERROR : Something went wrong')
        }
    }, 1000);
});

promiseFour
.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise is either resolve and rejected");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username : "javascript", password:"234"})
        }else{
            reject('error : js went wrong')
        }
    }, 1000);
});
async function consumePromiseFive() {
   try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()
// async are not generally handle errors

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response
})
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log("E: ",error);
})