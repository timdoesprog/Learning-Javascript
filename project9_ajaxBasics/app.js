// STEP ONE
// Make a XML Http Request Oobjext
const xhr = new XMLHttpRequest();
// STEP TWO
// create a callback function
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        let div = document.getElementById("ajax");
        div.innerHTML = xhr.responseText;
    }
};
// STEP THREE
// Open a request
xhr.open("GET", "content.html");
// STEP FOUR
// Send a request
const button = document.querySelector("button");
button.addEventListener("click", () => {
    xhr.send();
    button.style.display = "none";
});
