const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const replay = document.getElementById("replay");
const question = document.getElementById("question");


function render() {
    let currentQuestion = quiz.getQuestion();
    question.innerHTML = currentQuestion.question;
    choice1.innerHTML = currentQuestion.choice1;
    choice2.innerHTML = currentQuestion.choice2;
}

function displayScore() {
    choice1.style.display = "none";
    choice2.style.display = "none";
    question.innerHTML = "You got " + quiz.score + " of " +
        quiz.questions.length + " question(s) right!";
    replay.style.display = "block";
}
