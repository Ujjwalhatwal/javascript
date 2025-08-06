// for each loops :

const { isValidElement } = require("react");//

const arr = [122,1232,343,445,12]

// it use call back function which has no functionName.
// arr.forEach(  function (item){
//   console.log(item);
// } );


// // arrow function
// arr.forEach((item) => {
//     console.log(item);
// });




// // function declare
// function printMe(item){
//     console.log(item);
// }
// arr.forEach(printMe)


// all things in forEach => having access of item ,index , full array
arr.forEach( (item , index , arr)=> {
    console.log(item , index , arr);
} )

/* output : require reach npm package
122 0 [ 122, 1232, 343, 445, 12 ]
1232 1 [ 122, 1232, 343, 445, 12 ]
343 2 [ 122, 1232, 343, 445, 12 ]
445 3 [ 122, 1232, 343, 445, 12 ]
12 4 [ 122, 1232, 343, 445, 12 ]
*/

const MyCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    }
]

MyCoding.forEach((item) =>{
    console.log(item.languageName+" as "+item.languageFileName);
})
/*
javascript as js
java as java
python as py
c++ as cpp
*/