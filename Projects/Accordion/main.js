const data = [
    {
        id: 1,
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language used primarily for web development."
    },
    {
        id: 2,
        question: "What is the difference between let, const, and var?",
        answer: "let and const are block-scoped, while var is function-scoped. const is used for variables that shouldn't change."
    },
    {
        id: 3,
        question: "What is a closure in JavaScript?",
        answer: "A closure is a function that remembers its outer variables even after the outer function has closed."
    },
    {
        id: 4,
        question: "What are arrow functions?",
        answer: "Arrow functions are a concise way to write functions using the => syntax. They do not have their own this."
    },
    {
        id: 5,
        question: "What is the DOM?",
        answer: "The DOM (Document Object Model) represents the structure of a web page and allows scripts to access and modify it."
    },
    {
        id: 6,
        question: "What is an event listener?",
        answer: "An event listener waits for a specific event (like click or keypress) to occur and then runs a function."
    },
    {
        id: 7,
        question: "How do you handle errors in JavaScript?",
        answer: "You can handle errors using try...catch blocks."
    },
    {
        id: 8,
        question: "What is JSON?",
        answer: "JSON (JavaScript Object Notation) is a format for storing and transporting data, often used in APIs."
    },
    {
        id: 9,
        question: "What is the difference between == and ===?",
        answer: "== compares values with type coercion, === compares both value and type."
    },
    {
        id: 10,
        question: "What is a promise in JavaScript?",
        answer: "A promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value."
    }
];
// console.log(data);

const accordionWrapper = document.querySelector('.accordion');

function createAccordionData() {
    accordionWrapper.innerHTML = data.map(dataItem => `<div class = "accordion_item">
        <div class = "accordion_title">
        <h3>${dataItem.question}</h3>
        <i class ="fa-solid fa-arrow-up"></i>
        </div>
        <div class ="accordion_content">
        <p>${dataItem.answer}</p>
        </div>
        </div>`).join(" ")
}
createAccordionData();

const getAccordionTitles = document.querySelectorAll('.accordion_title');
console.log(getAccordionTitles);

getAccordionTitles.forEach(currentItem => {
    currentItem.addEventListener('click', (event) => {
        if (currentItem.classList.contains('active')) {
            currentItem.classList.remove('active')
        } else {
            let getAlreadyAddedActiveClasses = document.querySelectorAll('.active')
            getAlreadyAddedActiveClasses.forEach(currentActiveItem => {
                currentActiveItem.classList.remove('active')
            })
            currentItem.classList.add('active');
        }
    })
})

const expandAllBtn = document.getElementById("expandAll");
const collapseAllBtn = document.getElementById("collapseAll");

expandAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".accordion_title").forEach(title => {
        title.classList.add("active");
    });
});

collapseAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".accordion_title").forEach(title => {
        title.classList.remove("active");
    });
});
