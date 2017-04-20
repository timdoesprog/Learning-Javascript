function Song(title, artist, duration) {
    // call to the constructor of the "super" class
    Media.call(this, title, duration);
    this.artist = artist;
}

// Prototype chain
Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function() {
    let html = '<li';
    if (this.isPlaying) {
        html += ' class="playing"';
    }
    html += '>' + this.title + ' - ' + this.artist +
        '<span class="duration">' + this.duration + '</span></li>';
    return html;
}
