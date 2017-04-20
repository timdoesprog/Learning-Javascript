function Movie(title, year, duration) {
    // call to the constructor of the "super" class
    Media.call(this, title, duration);
    this.year = year;
}

// Prototype chain
Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
    let html = '<li';
    if (this.isPlaying) {
        html += ' class="playing"';
    }
    html += '>' + this.title + ' - ' + this.year +
        '<span class="duration">' + this.duration + '</span></li>';
    return html;
}
