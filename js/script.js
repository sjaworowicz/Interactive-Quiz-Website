const questions = [
    {
        question: "What is the most watched sport in the world?",
        answers:[
            {text: 'Baseball', correct: false},
            {text: 'Basketball', correct: false},
            {text: 'Soccer', correct: true},
            {text: 'American Football', correct: false},
        ]
    },
    {
        question: "What do you call it when you get three strikes in bowling?",
        answers:[
            {text: 'Turkey', correct: true},
            {text: 'Three', correct: false},
            {text: 'Triple', correct: false},
            {text: 'Few', correct: false},
        ]
    },
    {
        question: "What is the most watched sport in the world?",
        answers:[
            {text: 'Soccer', correct: false},
            {text: 'Baseball', correct: false},
            {text: 'American Football', correct: true},
            {text: 'Basketball', correct: false},
        ]
    },
    {
        question: "How many players are on a baseball team?",
        answers:[
            {text: '9', correct: false},
            {text: '26', correct: true},
            {text: '45', correct: false},
            {text: '36', correct: false},
        ]
    },
    {
        question: "Who was the first sports celebrity?",
        answers:[
            {text: 'Michael Jordan', correct: false},
            {text: 'Tom Brady', correct: false},
            {text: 'Babe Ruth', correct: true},
            {text: 'Lionel Messi', correct: false},
        ]
    },
    {
        question: "Which goalie has the most wins in NHL history?",
        answers:[
            {text: 'Patrick Roy', correct: false},
            {text: 'Martin Brodeur', correct: true},
            {text: 'Tony Espositso', correct: false},
            {text: 'Terry Sawchuk', correct: false},
        ]
    },
    {
        question: "Which NBA team has won the most titles?",
        answers:[
            {text: 'New York Knicks', correct: false},
            {text: 'Philadelphia 76ers', correct: false},
            {text: 'Golden State Warriors', correct: false},
            {text: 'Los Angeles Lakers', correct: true},
        ]
    },
    {
        question: "What is the name of the Super Bowl trophy?",
        answers:[
            {text: 'Commissioners trophy', correct: false},
            {text: 'Stanley Cup', correct: false},
            {text: 'Vince Lombardi', correct: true},
            {text: 'Larry O Brien', correct: false},
        ]
    },
    {
        question: "Who is known as 'The Captin' in baseball?",
        answers:[
            {text: 'Derek Jeter', correct: true},
            {text: 'David Wright', correct: false},
            {text: 'Reggie Jackson', correct: false},
            {text: 'Shohei Othani', correct: false},
        ]
    },
    {
        question: "What year was the MLS founded?",
        answers:[
            {text: '1985', correct: false},
            {text: '1993', correct: true},
            {text: '1999', correct: false},
            {text: '2003', correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}