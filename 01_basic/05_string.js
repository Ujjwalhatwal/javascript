// string : 

const name = "ujjwal"
const lastname = "kumar"

// console.log("name " + name + " , surname : " + lastname); 
//  this is outdated way to concatination of two strings 

// new version : using back tick
console.log(`hello my name is ${name} and my surname is ${lastname}`);

const gameName = new String("hitesh")
console.log(gameName); // it is a object 
console.log(typeof gameName); // it is a object 
console.log(typeof name); // it is a name 

// there are many inbuilt properties and function of string object in js
/*

String: "ujjwal"

Characters:
0: "u"
1: "j"
2: "j"
3: "w"
4: "a"
5: "l"
length: 6  


Commonly Used String Function Descriptions:

- charAt(index): Returns the character at the specified index.
  "ujjwal".charAt(0) ➝ "u"

- charCodeAt(index): Returns the Unicode of the character at a given index.
  "ujjwal".charCodeAt(0) ➝ 117

- concat(str): Joins two or more strings.
  "ujjwal".concat("123") ➝ "ujjwal123"

- includes(searchString): Checks if the string contains the given substring.
  "ujjwal".includes("j") ➝ true

- indexOf(searchValue): Returns the index of the first occurrence.
  "ujjwal".indexOf("j") ➝ 1

- lastIndexOf(searchValue): Returns the index of the last occurrence.
  "ujjwal".lastIndexOf("j") ➝ 2

- slice(start, end): Extracts a part of the string.
  "ujjwal".slice(0, 3) ➝ "ujj"

- substring(start, end): Similar to slice but doesn't accept negative values.
  "ujjwal".substring(1, 4) ➝ "jjw"

- substr(start, length): Extracts part of the string, deprecated but still used.
  "ujjwal".substr(1, 3) ➝ "jjw"

- split(separator): Splits string into array by separator.
  "ujjwal".split("") ➝ ["u", "j", "j", "w", "a", "l"]

- replace(search, replacement): Replaces first match with another string.
  "ujjwal".replace("j", "z") ➝ "uzjwal"

- replaceAll(search, replacement): Replaces all occurrences.
  "ujjwal".replaceAll("j", "z") ➝ "uzzwal"

- toUpperCase(): Converts entire string to uppercase.
  "ujjwal".toUpperCase() ➝ "UJJWAL"

- toLowerCase(): Converts entire string to lowercase.
  "UJJWAL".toLowerCase() ➝ "ujjwal"

- trim(): Removes whitespace from both ends.
  "  ujjwal  ".trim() ➝ "ujjwal"

- padStart(length, pad): Pads at the start until length is reached.
  "5".padStart(3, "0") ➝ "005"

- padEnd(length, pad): Pads at the end.
  "5".padEnd(3, "0") ➝ "500"

- repeat(count): Repeats the string multiple times.
  "ha".repeat(3) ➝ "hahaha"

- startsWith(substring): Checks if string starts with substring.
  "ujjwal".startsWith("ujj") ➝ true

- endsWith(substring): Checks if string ends with substring.
  "ujjwal".endsWith("al") ➝ true

- match(regex): Searches with regular expression.
  "ujjwal".match(/j/g) ➝ ["j", "j"]

- search(regex): Returns index of first match with regex.
  "ujjwal".search(/w/) ➝ 3

- valueOf(): Returns the primitive value of the string.
  "ujjwal".valueOf() ➝ "ujjwal"

- toString(): Converts to string (usually same as valueOf).
  (123).toString() ➝ "123"

- [Symbol.iterator](): Makes strings iterable (used in loops like for...of).

These methods help manipulate and retrieve information from strings efficiently.


Symbol:
- [Symbol.iterator]()

__Prototype chain__:
String → Object

Primitive value: "ujjwal"
*/

