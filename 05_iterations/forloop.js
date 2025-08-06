// for loops :

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5) console.log("5 is best number");
    console.log(element);
}
// console.log(element); // ReferenceError: element is not defined

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and outer loop ${i}`);
        console.log(i + ' * ' + j + ' = ' +  (i*j)); // to print table
    }
}


let myArray = ["flash", "batman","superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
// it java no exception like out of bound in other langauge 
// it just gave undefined , like here for index >= 4

// break and continue

for (let i = 0; i <= 20; i++) {
    if(i == 5) break; // to break the loop and come out of that loop
    if(i == 2) continue; // to skip the element
    console.log(`value of i is ${i}`);
}

