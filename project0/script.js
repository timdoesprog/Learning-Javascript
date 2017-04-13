const myHeading = document.getElementById("myHeading");
const textColor = document.getElementById("textColor");
const backgroundColor = document.getElementById("backgroundColor");
const myTextInput = document.getElementById("myTextInput");

myHeading.addEventListener("click", () => {
    if (myHeading.style.color === "black") {
        myHeading.style.color = "blue";
    } else {
        myHeading.style.color = "black";
    }
});

textColor.addEventListener("click", () => {
    myHeading.style.color = myTextInput.value;
});

backgroundColor.addEventListener("click", () => {
    document.body.style.background = myTextInput.value;
});
