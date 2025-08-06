// object destructuring  
// let,const{function name : yourchoice name} = object name

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh sir"
}
console.log(course.courseInstructor); // hitesh sir

// if you need to print it x times 
// clean practice for that
const {courseInstructor} = course
console.log(courseInstructor); // hitesh sir 

// also you gave more easy name of your choice
const{coursename : nm} = course
console.log(nm); // return course name

// api concept 
// phela values aati thi xml structure mai 
// ab mostly values aati hai json format mai

// json is a object without name

// {
//     "name" : "hitesh" 
//     "courseName " : "js in hindi",
//     "price" : 1234,
//     "valid" : true
// }

// api are in json format also sometime in array format
// [
//     {},
//     {},
//     {},
// ]


// to read data from api use tools like json formater,etc
// json : javascript object notation 
