const coding = ["js","py","rust","cpp","java","ruby"]

// // forEach never return a value it always undefined
// const values = coding.forEach((item) =>{
//     // console.log(item);
//     // return item
// }) 
// console.log(values);

const nums = [1,2,3,4,5,6,7,8,9,10]

//filter function : it return values
const newNums = nums.filter((num) =>{ 
    return num > 4
}) //[] , explicit return
console.log(newNums);

const newNums1 = nums.filter((num) => num > 4)
console.log(newNums1); // [5,6,7,8,9,10],implicit return

const newNum = []
nums.forEach((num) => {
    if(num > 4){
        newNum.push(num)
    }
})
console.log(newNum); //using foreach same result


const books = [
    {title : "b1",genre : "fiction",publich : 1981, edition : 2004},
    {title : "b2",genre : "non-fiction",publich : 1992, edition : 2008},
    {title : "b3",genre : "history",publich : 1999, edition : 2007},
    {title : "b4",genre : "non-fiction",publich : 1989, edition : 2010},
    {title : "b5",genre : "science",publich : 2009, edition : 2014},
    {title : "b6",genre : "fiction",publich : 1987, edition : 2010},
    {title : "b7",genre : "history",publich : 1986, edition : 1996},
    {title : "b8",genre : "science",publich : 2011, edition : 2016},
    {title : "b9",genre : "non-fiction",publich : 1981, edition : 1989},
]

// const userBooks = books.filter((book) => book.genre === 'history')
const userBooks = books.filter((book) => {
    return book.publich >= 2000 || book.genre === 'history'
})
console.log(userBooks);

