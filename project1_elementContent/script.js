const inputDesc = document.querySelector("input.desc");
const description = document.querySelector("p.description");
const buttonDesc = document.querySelector("button.desc");

const inputItem = document.querySelector("input.item");
const list = document.querySelector("ul");
const buttonItem = document.querySelector("button.item")
const buttonRemove = document.querySelector("button.remove");

const hideButton = document.querySelector(".hide");
const container = document.querySelector(".container");

buttonDesc.addEventListener("click", () => {
    description.textContent = inputDesc.value + ":";
    inputDesc.value = "";
});

buttonItem.addEventListener("click", () => {
    // list.innerHTML += "<li>" + inputItem.value + "</li>";
    let li = document.createElement("li");
    li.textContent = inputItem.value;
    list.appendChild(li);
    inputItem.value = "";
});

buttonRemove.addEventListener("click", () => {
    let li = document.querySelector("li:last-child");
    list.removeChild(li);
});

hideButton.addEventListener("click", () => {
    if (container.style.display === "none") {
        container.style.display = "initial";
        hideButton.innerHTML = "HIDE!";
    } else {
        container.style.display = "none";
        hideButton.innerHTML = "SHOW!";
    }
});
