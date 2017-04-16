const inputItem = document.querySelector("input.item");
const list = document.querySelector("ul");
const listItems = list.children;
const buttonItem = document.querySelector("button.item")


function attachListItemButtons(listItem) {
    let up = document.createElement("button");
    let down = document.createElement("button");
    let remove = document.createElement("button");
    up.className = "up";
    up.textContent = "Up";
    down.className = "down";
    down.textContent = "Down";
    remove.className = "remove";
    remove.textContent = "X";
    listItem.appendChild(up);
    listItem.appendChild(down);
    listItem.appendChild(remove);
}


for (let i = 0; i < listItems.length; i++) {
    attachListItemButtons(listItems[i]);
}


list.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        if (event.target.className === "up"){
            let prevLi = li.previousElementSibling;
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
        } else if (event.target.className === "down") {
            let nextLi = li.nextElementSibling;
            if(nextLi) {
                ul.insertBefore(nextLi, li);
            }
        } else {
            ul.removeChild(li);
        }
    }
});


buttonItem.addEventListener("click", () => {
    if (inputItem.value) {
        let li = document.createElement("li");
        li.textContent = inputItem.value;
        attachListItemButtons(li);
        list.appendChild(li);
        inputItem.value = "";
    }
});
