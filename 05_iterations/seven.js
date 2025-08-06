const myNumbers = [1,2,3,4,5,6,7,8,9,10]


// update using map
const newNum = myNumbers.map((num) => num+10)
console.log(newNum);

//update using for each
const newNum2 = []
myNumbers.forEach((num) => {
    newNum2.push(num+10)
})
console.log(newNum2);

// filter function return value, whereas foreach not return value


// chaining of function :

const cFun =  myNumbers.map((num) => num+10).map((num) => num +100).filter((num) => num >= 115)
console.log(cFun)


// reduce function

const aNum = [1,2,3]
const myTotal = aNum.reduce((acc,currentval) => {
    console.log(`at accumulator ${acc} the value is current ${currentval}`);
    return acc + currentval
},0) // 0 here is acc 
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    }
]

const TotalCost = shoppingCart.reduce((acc,curr) => {
    return acc + curr.price
},0) // acc stand for accumulator
console.log(TotalCost);

