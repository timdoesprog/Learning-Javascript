/*
// passing fucntions around

function say(something) {
    console.log("I'm giving up on " + something);
}

function execute(func, argument) {
    func(argument);
}

execute(say, "sugar");
execute((something) => {
    console.log("I'm giving up on " + something);
}, "America");

window.setTimeout(say, 5000, "Coca Cola");
*/

const listItems = document.getElementsByTagName("li");

const inputItem = document.querySelector("input.item");
const list = document.querySelector("ul");
const buttonItem = document.querySelector("button.item")
const buttonRemove = document.querySelector("button.remove");


// can be simplified due to event bubbling
// adding event handler to the parent element
// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("mouseover", () => {
//         listItems[i].textContent = listItems[i].textContent.toUpperCase();
//     });
//
//     listItems[i].addEventListener("mouseout", () => {
//         listItems[i].textContent = listItems[i].textContent.toLowerCase();
//     });
// }


// Testing the event.target property
// document.addEventListener("click", (event) => {
//     console.log(event.target);
// });


list.addEventListener("mouseover", (event) => {
    let target = event.target;
    target.textContent = target.textContent.toUpperCase();
});

list.addEventListener("mouseout", (event) => {
    let target = event.target;
    target.textContent = target.textContent.toLowerCase();
});


buttonItem.addEventListener("click", () => {
    // list.innerHTML += "<li>" + inputItem.value + "</li>";
    if (inputItem.value) {
        let li = document.createElement("li");
        li.textContent = inputItem.value;
        list.appendChild(li);
        inputItem.value = "";
    }
});


buttonRemove.addEventListener("click", () => {
    let li = document.querySelector("li:last-child");
    if (li) {
        list.removeChild(li);
    }
});
