// const myHeading = document.getElementById("myHeading");
const myHeading = document.querySelector("#myHeading");
const textColor = document.getElementById("textColor");
const backgroundColor = document.getElementById("backgroundColor");
const listColor = document.getElementById("listColor");
const myTextInput = document.getElementById("myTextInput");
const listItems = document.getElementsByTagName("li");
const even = document.querySelectorAll("li:nth-child(even)");
// const paragraphs = document.getElementsByClassName("text");
const paragraphs = document.querySelectorAll(".text");

// when heading is clicked changes color from black to blue and back
myHeading.addEventListener("click", () => {
    if (myHeading.style.color === "black") {
        myHeading.style.color = "blue";
    } else {
        myHeading.style.color = "black";
    }
});

// changes the color of the heading and paragraphs to the input text
textColor.addEventListener("click", () => {
    myHeading.style.color = myTextInput.value;
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = myTextInput.value;
    }
});

// changes background color
backgroundColor.addEventListener("click", () => {
    // document.body.style.background = myTextInput.value;
    for (let i = 0; i < even.length; i++) {
        even[i].style.background = myTextInput.value;
    }
});

// changes the color of listItems to the input text
listColor.addEventListener("click", () => {
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.color = myTextInput.value;
    }
})
