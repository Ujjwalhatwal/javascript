// // scoping 

// // { scope } in function,if,for not object wale {}
// let c = 300
// if(true){
//     var a = 10
//     const b = 20
//     let c = 30
//     console.log(`inner c ${c}`);
// }
// // console.log(a); // 10, not gave error
// // console.log(b); // ReferenceError: b is not defined
// // console.log(c); // ReferenceError: c is not defined

// console.log(`outer c ${c}`);

function one(){
    const username = "ramesh"
    function two(){
        const website = "youtube.com"
        console.log(username);
    }
    // console.log(webite);
    two()
}
one();
// follow inheritance like concept  called as closure
// child scope access parent but parent not access child
// outer variable access in inner scope but inner define not access in outer scope


if(true){
    const username = "sagar"
    if(username === "sagar"){
        const website = " youtube.com"
        console.log(username + website);
    }
    // console.log(website); // gave error   
}
// console.log(username); //gave error 


//++++++++++++++ interesting +++++++++++++\\
//hoisting concept

console.log(add(5)); // hoisting possible
function add(num){
    return num+3
}// simple function

console.log(addNum(6)); // gave error 
//ReferenceError: Cannot access 'addNum' before initialization
const addNum = function(num){
    return num+3
} // it also called expression.
