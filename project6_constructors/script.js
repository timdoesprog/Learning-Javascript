// Song playlist
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const stopButton = document.getElementById("stop");
const list = document.querySelector("ul");

playButton.addEventListener("click", () => {
    playlist.play();
    playlist.renderIn(list);
});

nextButton.addEventListener("click", () => {
    playlist.next();
    playlist.renderIn(list);
});

stopButton.addEventListener("click", () => {
    playlist.stop();
    playlist.renderIn(list);
});

var playlist = new Playlist();

var song1 = new Song("Basket Case", "Green Day", "2:57");
var song2 = new Song("Holiday", "Green Day", "3:15");

playlist.add(song1);
playlist.add(song2);
playlist.renderIn(list);
