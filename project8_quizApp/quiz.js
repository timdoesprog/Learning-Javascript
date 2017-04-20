function Quiz() {
    this.questions = [];
    this.current = 0;
    this.score = 0;
    isFinished = false;
}

Quiz.prototype.addQuestion = function(question) {
    this.questions.push(question);
}

Quiz.prototype.getQuestion = function() {
    return this.questions[this.current];
}

Quiz.prototype.nextQuestion = function() {
    this.current++;
    if (this.current >= this.questions.length) {
        this.isFinished = true;
    }
}

Quiz.prototype.incrementScore = function() {
    this.score++;
}

Quiz.prototype.replay = function() {
    this.current = 0;
    this.score = 0;
    this.isFinished = false;
}
