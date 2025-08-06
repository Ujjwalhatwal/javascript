// e - commerce
function calculateCartPrice(num1){
    return num1
} // 200
console.log(calculateCartPrice(200,300,400));


function calculateCartPrice1(...num1){
    return num1
} // [200,300,400]
console.log(calculateCartPrice1(200,300,400));


function calculateCartPrice2(val1,val2,...num1){
    return num1
} // [400,2000,4000]
console.log(calculateCartPrice2(200,300,400,2000,4000));


// ... spread v/s rest both are same but usecase different
// spread : use in merging of arrays,objects
// rest : used in function parameter to take mulitple argument of same type

// object passing in function
const user = {
    username : "ramesh",
    price : 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user); //username is ramesh and price is 199
// type safty must be checked : typechecking

handleObject({
    username : "kalu",
    price : 134
})

// passing array in functions : 
function ReturnSecondValue(getArray){
    return getArray[2];
}
console.log(ReturnSecondValue([200,300,400,500])); // 400
