function populateEmployees(employees) {
    let list = document.querySelector("#employees");
    for (let i = 0; i < employees.length; i++) {
        // let html = "<li ";
        // if (employees[i]["inoffice"]) {
        //     html += "class='in'>";
        // } else {
        //     html += "class='out'>";
        // }
        // html += employees[i]["name"];
        // html += "</li>";
        // list.innerHTML += html;

        let li = document.createElement("li");
        if (employees[i]["inoffice"]) {
            li.className = "in";
        } else {
            li.className = "out";
        }
        li.innerHTML = employees[i]["name"];
        list.appendChild(li);
    }
}


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        var employees = JSON.parse(xhr.responseText);
        populateEmployees(employees);
    }
};
xhr.open("GET", "employees.json");
xhr.send();
