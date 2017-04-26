// Script only fires when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registration");
    const input = form.querySelector("input");
    const list = document.getElementById("invitedList");
    const divMain = document.getElementById("main");


    function createButton(text, className) {
        const button = document.createElement("button");
        button.textContent = text;
        button.className = className;
        return button;
    }

    function createElement(type, property, value) {
        const element = document.createElement(type);
        element[property] = value;
        return element;
    }


    function createListItem(text) {
        const li = document.createElement("li");
        const span = createElement("span", "textContent", text);

        const label = createElement("label", "textContent", "Confirmed");
        const checkbox = createElement("input", "type", "checkbox");
        label.appendChild(checkbox);

        const buttonDelete = createButton("Delete", "delete");

        const buttonEdit = createButton("Edit", "edit");

        li.appendChild(span);
        li.appendChild(label);
        li.appendChild(buttonDelete);
        li.appendChild(buttonEdit);

        return li;
    }


    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let text = input.value;
        input.value = "";
        if (text) {
            const li = createListItem(text);
            list.appendChild(li);
        }
    });

    list.addEventListener("change", (event) => {
        const checkbox = event.target;
        const checked = checkbox.checked;
        const listItem = checkbox.parentNode.parentNode;

        if (checked) {
            listItem.className = "responded";
        } else {
            listItem.className = "";
        }
    });


    list.addEventListener("click", (event) => {

        const li = event.target.parentNode;
        const action = event.target.className;
        const nameActions = {
            delete: () => {
                list.removeChild(li);
            },
            edit: () => {
                const span = li.firstElementChild;
                const text = span.textContent;
                const input = createElement("input", "type", "text");
                input.value = text;
                input.className = "editInput";
                li.insertBefore(input, span);
                li.removeChild(span);

                const buttonEdit = li.querySelector(".edit");
                const buttonSave = createButton("Save", "save");
                li.insertBefore(buttonSave, buttonEdit);
                li.removeChild(buttonEdit);
            },
            save: () => {
                const input = li.firstElementChild;
                const text = input.value;
                const span = createElement("span", "textContent", text);
                li.insertBefore(span, input);
                li.removeChild(input);

                const buttonSave = li.querySelector(".save");
                const buttonEdit = createButton("Edit", "edit");
                li.insertBefore(buttonEdit, buttonSave);
                li.removeChild(buttonSave);
            }
        }

        nameActions[action]();
    });

    divMain.addEventListener("change", (event) => {
        const checkbox = event.target;
        if (checkbox.id === "hasResponded") {
            const checked = event.target.checked;
            const listItems = list.childNodes;
            if (checked) {
                for (let i = 0; i < listItems.length; i++) {
                    if (listItems[i].className === "responded") {
                        listItems[i].style.display = "none";
                    }
                }
            } else {
                for (let i = 0; i < listItems.length; i++) {
                    if (listItems[i].className === "responded") {
                        listItems[i].style.display = "block";
                    }
                }
            }
        }
    });
});
