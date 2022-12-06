import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }


var instructions = document.getElementById("instructions");
var quiz = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
var askQuestion = document.getElementById("askQuestion");
var submitBtn = document.getElementById("submitBtn");
var resetBtn = document.getElementById("resetBtn");
var form = document.getElementById("form");
var quiz = document.getElementById("quiz");
var inform = document.getElementById("inform");
var showScore = document.getElementById("showScore");
var displayScore = document.getElementById("displayScore");
var displayQCount = document.getElementById("displayQCount");
var checkedRadio;
var allRadios;
var i;
var score;

var questions = [
  {
    question: "Hermione's Patronus takes the form of what animal?",
    choices: ["Fox", "Gazelle", "Otter", "Beaver"],
    correct: 2
  },
  {
    question: "Which other character died similarly to how Sirius Black died?",
    choices: ["Remus Lupin", "Albus Dumbledore", "Cedric Diggory", "Fred Weasley"],
    correct: 3
  },
  {
    question: "What type of car did Mr. Weasley bewitch to fly?",
    choices: ["Ford Anglia", "Triumph Twelve", "Hillman Minx", "Humber Super Snipe"],
    correct: 0
  },
  {
    question: "What is the name of the fountain located inside the Ministry of Magic?",
    choices: ["Fountain of Mighty Magic", "Magic is Might", "Everlasting Magic", "Fountain of Magical Brethen"],
    correct: 3
  },
  {
    question: "How many times was Nearly Headless Nick hit in the neck with a blunt axe?",
    choices: ["25", "35", "45", "55"],
    correct: 2
  }
];

window.onload = beginQuiz;

function beginQuiz() {
    form.style.display = "block";
    instructions.style.display = "block";
    showScore.style.display = "none";
    quiz.style.display = "none";
    submitBtn.style.display = "none";
    i = 0;
    score = 0;
    displayQCount.innerHTML = 1;
    displayScore.innerHTML = 0;
}

startBtn.addEventListener("click", function() {
    instructions.style.display = "none";
    submitBtn.style.display = "block";
    quiz.style.display = "block";
    getQAs();
});

submitBtn.addEventListener("click", function() {
    allRadios = document.getElementsByName("option");
    var isChecked = false;
    for (var j = 0; j < allRadios.length; j++) {
        if (allRadios[j].checked) {
            isChecked = true;
            checkedRadio = j;
            break;
        }
    }
    if (!(isChecked)) {
        alert("Please select an answer before moving on");
    } else {
        getResults();
        deselectRadios();
        i++;
        displayQCount.innerHTML = i + 1;
        getQAs();
    }
});

function deselectRadios() {
    allRadios = document.getElementsByName("option");
    for (var p = 0; p < allRadios.length; p++) {
        allRadios[p].checked = false;
    }
}

function getResults() {
        if (allRadios[checkedRadio].value === questions[i].choices[questions[i].correct]) {
            score++;
            displayScore.innerHTML = score;
        }
}

function getQAs() {
    if (i < 5) {
        askQuestion.innerHTML = questions[i].question;
        for (var k = 0; k < 4; k++) {
            document.getElementById("answer" + k).innerHTML = questions[i].choices[k];
            document.getElementById("answer" + k).setAttribute("for", questions[i].choices[k]);
            document.getElementById("label" + k).setAttribute("value", questions[i].choices[k]);
        }
    } else {
        displayResults();
    }
};

function displayResults() {
    quiz.style.display = "none";
    showScore.style.display = "block";
    inform.innerHTML = "Congratulations!! You scored " + score + " out of 5 correct.";
};

resetBtn.addEventListener("click", function() {
    beginQuiz();
});
