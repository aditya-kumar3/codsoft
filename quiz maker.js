let currentQuestion = 0;
let score = 0;
const questions = [
    {
        question: "who is prime minister of india?",
        answers: ["Narendra modi", "Rahul gandhi" , "Lalu yadav", "virat kohli"],
        correct: 0
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Cascading Style Scripts", "Cascading Sheets Style", "Cascading Scripts Style"],
        correct: 0
    },
    {
      question: "What does HTML stand for?",
      answers: ["HyperText Markup Language", "HyperLink Text Makeup", "HyperTime Markup Language", "HyperTex Markup Language"],
      correct: 0
  },
    // Add more questions here...
];

function showQuestion() {
    if (currentQuestion < questions.length) {
        const questionElement = document.getElementById("question");
        const answersElement = document.getElementById("answers");
        questionElement.textContent = questions[currentQuestion].question;
        answersElement.innerHTML = '';
        questions[currentQuestion].answers.forEach((answer, index) => {
            const li = document.createElement("li");
            const radio = document.createElement("input");
            const label = document.createElement("label");
            radio.type = "radio";
            radio.name = "answer";
            radio.value = index;
            label.textContent = answer;
            li.appendChild(radio);
            li.appendChild(label);
            answersElement.appendChild(li);
        });
    }
}

function checkAnswer() {
    const radios = document.getElementsByName("answer");
    let selectedAnswer;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedAnswer = radios[i].value;
            break;
        }
    }
    if (selectedAnswer == questions[currentQuestion].correct) {
        score++;
        document.getElementById("result").textContent = `Correct! Your current score is ${score}.`;
    } else {
        document.getElementById("result").textContent = `Incorrect. The correct answer was ${questions[currentQuestion].answers[questions[currentQuestion].correct]}. Your current score is ${score}.`;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        setTimeout(() => {
            showQuestion();
            document.getElementById("result").textContent = "";
        }, 2000);
    } else {
        document.getElementById("result").textContent = `Quiz finished. Your final score is ${score} out of ${questions.length}.`;
        // Hide the submit button or show a restart button
    }
}

showQuestion();