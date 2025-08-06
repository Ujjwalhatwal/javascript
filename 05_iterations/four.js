const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

// to iterate object use forin loop
for (const key in myObject) {
//    console.log(key);    // to get keys
//    console.log(myObject[key]);    // to get values
console.log(`${key} shortcut is for ${myObject[key]}`);
}

const ages = [12,24,32,14,53,63]
for (const age in ages) {
    // console.log(`the age is ${age}`);  // it print the index,key value
    console.log(`the age is ${ages[age]}`);  // it print the value 
}

