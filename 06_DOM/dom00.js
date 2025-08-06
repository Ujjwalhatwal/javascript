/*
document.getElementById('title')
: <h1 id=​"title" class=​"heading">​DOM learing on chai aur code​</h1>​

document.getElementById('title').id
: 'title'

document.getElementById('title').class
: undefined

document.getElementById('title').className
: 'heading'

document.getElementById('title').getAttribute
: ƒ getAttribute() { [native code] }

document.getElementById('title').getAttribute()
: VM567:1 Uncaught TypeError: Failed to execute 'getAttribute' on 'Element': 1 argument required, but only 0 present.
    at <anonymous>:1:34

document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').getAttribute('class')
'heading'
document.getElementById('title').getAttribute('key')
null


document.getElementById('title').setAttribute('id' ,'hhh2')
undefined
: it overwrite the attribute name always id change to hhh2 in actual name



// important :  
document.getElementById('title')
: <h1 id=​"title" class=​"heading">​DOM learing on chai aur code​</h1>​

const tile = document.getElementById('title')
: undefined

title <= const call
: <h1 id=​"title" class=​"heading">​DOM learing on chai aur code​</h1>​


title.style.backgroundColor = "purple"
: 'purple'
title.style.padding = "40px"
: '40px'

// important : 
const title = document.getElementById('title')
: undefined

title.innerHTML
: 'DOM learing on chai aur code <span style="display: none;"> ujjwal kumar</span>'
 => display whole inner html

title.innerText
:'DOM learing on chai aur code'
 => display the visible text only

title.textContent
:'DOM learing on chai aur code  ujjwal kumar'
 => display the whole text content



// query selector 
document.querySelector('h2')
: <h2>​lorem2 lorem lorem 3 4 words​</h2>​
 => it select first text only 
document.querySelectorAll('h2')
: NodeList(3) [h2, h2, h2]0: h21: h22: h2length: 3[[Prototype]]: NodeList

// select id using #idname
document.querySelector('#title')
: <h1 id=​"title" class=​"heading">​…​</h1>

// select class using .className
document.querySelector('.heading')
: <h1 id=​"title" class=​"heading">​…​</h1>​

// change using selector 

document.querySelector('ul')
: <ul>​…​</ul>​
const myUl = document.querySelector('ul')
: undefined

myUl.style.color = "yellow"
'yellow'
myUl.style.backgroundColor = "pink"
'pink'

const myUl = document.querySelector('ul')
const lt = myUl.querySelector('li') // select first list item 'one'
lt.style.color = "blue"
: 'blue'

lt.textContent
: 'one'
lt.textContent = "five"
: 'five'



// *********** querySelectorAll ***********

document.querySelector('li')
: <li>​::marker​"one"</li>​

document.querySelectorAll('li')
: NodeList(3) [li, li, li]

0: li
1: li
2: lilength: 
3  [[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object



// ********************
const tempList = document.querySelectorAll('li')
undefined
tempList.length
3
tempList.style.color = "green"
VM3983:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:22


const Uk = document.querySelectorAll('li');
undefined

Uk.style.color = "green"
: VM4483:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:16
(anonymous) @ VM4483:1


Uk[0].style.color = "blue"
: 'blue'



// nodelist : 
const head = document.querySelectorAll('h1')
undefined

head.style.color = "green"
: VM4695:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:18
(anonymous) @ VM4695:1


head[0].style.color = "green"
: 'green'


const head = document.querySelectorAll('h2')
head.forEach((l) => {
    l.style.color = "purple"
})


const head = document.querySelectorAll('li')
head.forEach((l) => {
    l.style.color = "purple"
})



// html collection : does not have for each loop so convert it into array :

document.getElementsByClassName("list-item")
: HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

const clist = document.getElementsByClassName('list-item')
undefined
clist.forEach((l) => {
    l.style.color = "purple"
})
: VM5528:1 Uncaught TypeError: clist.forEach is not a function
    at <anonymous>:1:7
(anonymous) @ VM5528:1

Array.from(clist);
: (4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: Array(0)

const arrList = Array.from(clist);
: undefined
arrList.forEach((l) =>{
    l.style.color = "green"
})
: undefined , make each item in list green



*/


/*
// wikipedia changes


document.querySelectorAll('h2')
NodeList(15) [h2.vector-pinnable-header-label, h2#History, h2#Editions, h2#Execution_system, h2#Syntax, h2#Special_classes, h2#Criticism, h2#Class_libraries, h2#Documentation, h2#Implementations, h2#Use_outside_the_Java_platform, h2#See_also, h2#References, h2#Bibliography, h2#External_links]
const heading = document.querySelectorAll('h2')
undefined
const arrH = Array.from(heading)
undefined
arrH
(15) [h2.vector-pinnable-header-label, h2#History, h2#Editions, h2#Execution_system, h2#Syntax, h2#Special_classes, h2#Criticism, h2#Class_libraries, h2#Documentation, h2#Implementations, h2#Use_outside_the_Java_platform, h2#See_also, h2#References, h2#Bibliography, h2#External_links]
arrH.forEach((li) => {
    li.style.color = "purple"
})
undefined
arrH.forEach((li) => {
    li.style.color = "orange"
})
undefined
arrH.forEach((li) => {
    li.style.color = "orange"
})
undefined
arrH.forEach((li) => {
    li.style.color = "orange"
    li.style.backgroundColor = "yellow"
})
undefined
const heading = document.querySelectorAll('h2')
undefined
heading[13].innerText
'Bibliography'
heading[13].textContent = "Ramesh"
'Ramesh'

*/
