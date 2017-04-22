function populateRooms(rooms) {
    let list = document.querySelector("#rooms");
    for (let i = 0; i < rooms.length; i++) {
        let li = document.createElement("li");
        if (rooms[i]["occupied"]) {
            li.className = "occupied";
        } else {
            li.className = "free";
        }
        li.innerHTML = rooms[i]["room"];
        list.appendChild(li);
    }
}


var roomsXhr = new XMLHttpRequest();
roomsXhr.onreadystatechange = function() {
    if(roomsXhr.readyState === 4) {
        let rooms = JSON.parse(roomsXhr.responseText);
        populateRooms(rooms);
    }
};
roomsXhr.open("GET", "rooms.json");
roomsXhr.send();
