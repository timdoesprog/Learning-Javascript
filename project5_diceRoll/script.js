// Object literals
var person = {
    name : "Tim",
    student : true
};
// keys in an object are always strings but the interpreter will do the work
// for us, converting the variable name into an string.
// this is also valid:
var person2 = {
    "name" : "Vale",
    "student" : true,
    "this is also valid" : true
};



var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
};

const button = document.querySelector("button");
const textField = document.querySelector("h1");

button.addEventListener("click", () => {
    textField.innerHTML = dice.roll();
});
