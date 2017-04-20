const question1 = new Question("What is the lowest temperature in the universe?",
    "-273.15 Celcius",
    "-273.15 Celcius",
    "0 Celcius"
);
const question2 = new Question("What is the hottest temperature in the universe?",
    "We don't know",
    "One quadrillion Celcius",
    "We don't know"
);

const quiz = new Quiz();
quiz.addQuestion(question1);
quiz.addQuestion(question2);

render()
choice1.addEventListener("click", () => {
    if(choice1.innerHTML === quiz.getQuestion().answer) {
        quiz.incrementScore();
    }
    quiz.nextQuestion();
    if(!quiz.isFinished) {
        render();
    } else {
        displayScore();
    }
});

choice2.addEventListener("click", () => {
    if(choice2.innerHTML === quiz.getQuestion().answer) {
        quiz.incrementScore();
    }
    quiz.nextQuestion();
    if(!quiz.isFinished) {
        render();
    } else {
        displayScore();
    }
});

replay.addEventListener("click", () => {
    replay.style.display = "none";
    choice1.style.display = "block";
    choice2.style.display = "block";
    quiz.replay();
    render();
});
