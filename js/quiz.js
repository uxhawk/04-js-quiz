//quiz variables
var score = 0;
var scoreHistory = [];
var value;
var correctAns = "";
var quizOver = true;
var secondsLeft = 180;

//dom elements
var questionIterator = 0;
var quesText = document.getElementById("question-text");
var radioContainer = document.getElementById("radio-container");
var scoreBadge = document.getElementById("score-badge");
var questionNumber = document.getElementById("question-number");
var cardFooter = document.getElementById("card-footer");
var timeLeft = document.getElementById("timer");
var topRow = document.getElementById("top-row");



init();

function setStorage() {
    localStorage.setItem("scoreHistory", JSON.stringify(scoreHistory));
}

function init() {
    var pIntro = `<p class="text-center">Click Begin to complete a 10 question Javascript quiz in under 3:00 minutes.</p>`;
    var beginBtn = `<div class="text-center"><button id="begin-quiz" class="btn btn-primary">Begin</button></div>`;

    topRow.setAttribute("class", "text-right");
    quesText.innerText = "";
    radioContainer.insertAdjacentHTML("afterbegin", pIntro);
    radioContainer.insertAdjacentHTML("beforeend", beginBtn);
    questionNumber.innerText = "Time for a quiz";
    timeLeft.innerText = "";
    cardFooter.innerHTML = "";

    // Get from localStorage
    // Parsing the JSON string to an object
    var storedScoreHistory = JSON.parse(localStorage.getItem("scoreHistory"));

    if (storedScoreHistory !== null) {
        scoreHistory = storedScoreHistory;
        topRow.setAttribute("class", "d-flex justify-content-between");
        showScoresBtn();
        populateModal();

    }
}

function populateModal() {
    var tableBod = document.getElementById("score-history-body");
    tableBod.innerHTML = "";
    for (let i = 0; i < scoreHistory.length; i++) {

        var newRow = `<tr>
        <th scope="row"><span id="score-history${i}">${i+1}</span></th>
        <td>${scoreHistory[i].initials}</td>
        <td>${scoreHistory[i].score}</td>
        </tr>`;

        tableBod.insertAdjacentHTML("beforeend", newRow);
    }
}

document.getElementById("begin-quiz").addEventListener('click', function() {
    timeLeft.textContent = "Time Remaining: 180 seconds";
    cardFooter.innerHTML = `<button id="submit-question" class="btn btn-primary">Submit</button>`


    displayQuestion();
    setTime();


    //respond to user submitting question
    var submitBtn = document.getElementById("submit-question");

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (jsQuizArr[questionIterator].options[value] === setCorrectAnswer()) {
            scoreBadge.innerText = `Score: ${score} / ${questionIterator}`
            score++;
        } else {
            //decrease the timer
            secondsLeft -= 20;

        }

        if (questionIterator === jsQuizArr.length - 1) {
            endOfQuiz();
            return;
        }
        questionIterator++;
        scoreBadge.innerText = `Score: ${score} / ${questionIterator}`;
        displayQuestion();
    });

});

function showScoresBtn() {
    var viewScoresBtn = `<button id="view-scores" type="button" class="btn btn-info mt-4" data-toggle="modal" data-target="#score-history-modal">View Scores</button>`;
    topRow.insertAdjacentHTML("afterbegin", viewScoresBtn);
    // if (scoreHistory < 1) {

    // } else {
    //     document.getElementById("view-scores").removeAttribute("disabled");
    // }

}

var quizQuestions = [{
        question: "What question do you want to ask the user?",
        respOptions: [
            "option a",
            "option b",
            "option c",
            "option d"
        ],
        answer: "option c"
    },
    {
        question: "What different question do you want to ask the user?",
        respOptions: [
            "option a",
            "option b",
            "option c",
            "option d"
        ],
        answer: "option c"
    }
]

// quiz array
var jsQuizArr = [{
        q: `Inside which HTML element do we put the JavaScript?`,
        options: [
            "<js>",
            "<scripting>",
            "<script>",
            "<javascript>"
        ],

        ans: function() {
            return this.options[2]
        }
    },

    {
        q: `What is the correct syntax for referring to an external script called "xxx.js"?`,
        options: [
            `<script name="xxx.js">`,
            `<script href="xxx.js">`,
            `<script source="xxx.js">`,
            `<script src="xxx.js">`
        ],

        ans: function() {
            return this.options[3]
        },
    },

    {
        q: `The external JavaScript file must contain the <script> tag.`,
        options: [
            `True`,
            `False`
        ],

        ans: function() {
            return this.options[1]
        },
    },

    {
        q: `How do you write "Hello World" in an alert box?`,
        options: [
            `alert("Hello World");`,
            `msg("Hello World");`,
            `msgBox("Hello World");`,
            `alertBox("Hello World");`,
        ],
        ans: function() {
            return this.options[0]
        },
    },

    {
        q: `How do you call a function named "myFunction"?`,
        options: [
            `call function myFunction()`,
            `myFunction()`,
            `call myFunction()`,
            `initiate myFunction()`,
        ],

        ans: function() {
            return this.options[1]
        },
    },

    {
        q: `How do you write an IF statement for executing some code if "i" is NOT equal to 5?`,
        options: [
            `if i !=5 then`,
            `if (i <> 5)`,
            `if(i != 5)`,
            `if i <> 5`,
        ],
        ans: function() {
            return this.options[2]
        },
    },

    {
        q: `How does a FOR loop start?`,
        options: [
            `for (i = 0; i <= 5; i++)`,
            `for (i = 0; i <= 5)`,
            `for i 1 to 5`,
            `for (i <= 5; i++)`,
        ],

        ans: function() {
            return this.options[0]
        },
    },

    {
        q: `How can you add a comment in a JavaScript?`,
        options: [
            `<!--This is a comment-->`,
            `##This is a comment`,
            `**This is a comment`,
            `//This is a comment`,
        ],

        ans: function() {
            return this.options[3]
        },
    },

    {
        q: `What is the correct way to write a JavaScript array?`,
        options: [
            `var colors = (1: "red", 2: "green", 3: "blue")`,
            `var colors = "red", "green", "blue"`,
            `var colors = ["red", "green", "blue"]`,
            `var colors = 1: "red", 2: "green", 3: "blue"`,
        ],
        ans: function() {
            return this.options[2]
        },
    },

    {
        q: `Which event occurs when the user clicks on an HTML element?`,
        options: [
            `onclick`,
            `onchange`,
            `onmouseover`,
            `onmouseclick`,
        ],
        ans: function() {
            return this.options[0]
        },
    }
];

function displayQuestion() {
    setCorrectAnswer();
    quizOver = false;
    document.getElementById("submit-question").setAttribute("disabled", "true");

    if (scoreHistory.length !== 0) {
        document.getElementById("view-scores").setAttribute("disabled", "true");
    }

    quesText.innerText = "";
    radioContainer.innerHTML = "";
    questionNumber.innerText = `Question ${questionIterator +1} of ${jsQuizArr.length}`;
    quesText.innerText = jsQuizArr[questionIterator].q;
    for (let i = 0; i < jsQuizArr[questionIterator].options.length; i++) {
        var option = jsQuizArr[questionIterator].options[i];
        var radioBlock = `<div class="form-check" data-index="${i}">
        <input class="form-check-input" type="radio" name="radios"
            id="option-${i}" value="${i}">
        <label class="form-check-label" for="option-${i}">
            <span id="resp-${i}"></span>
        </label>
    </div>`;

        radioContainer.insertAdjacentHTML("beforeend", radioBlock);
        document.getElementById(`resp-${i}`).textContent = option;
    }

    //respond to user clicking/tapping radio btns, add event listeners to rendered elements
    var radio_buttons = document.getElementsByClassName("form-check-input");
    Array.from(radio_buttons).forEach(function(element) {
        element.addEventListener('click', function(event) {
            document.getElementById("submit-question").removeAttribute("disabled");
            value = event.target.getAttribute("value");
            return value;
        });
    });
}

function setCorrectAnswer() {
    var correctAns = jsQuizArr[questionIterator].ans();
    return correctAns;
};

function endOfQuiz() {
    if (scoreHistory.length !== 0) {
        document.getElementById("view-scores").removeAttribute("disabled");
    }

    quizOver = true;
    timeLeft.textContent = "";
    scoreBadge.innerText = "";
    quesText.innerHTML = "";
    questionNumber.innerText = "End of Quiz";
    var finalScoreDisp = `<h3 class="text-center">Final Score</h3>
        <h5 class="text-center"><span id="final-score">${score} out of ${jsQuizArr.length}</span></h5>`;
    var saveScoreForm = `<form><div class="form-group form-group w-50 mx-auto"><input type="text" class="form-control" id="user-initials" aria-describedby="user-initials" placeholder="Enter initials" value=""></div><div class="text-center"><button id="save-score" type="submit" class="btn btn-primary mb-4">Save Score</button> <button id="play-again" type="" class="btn btn-secondary mb-4">Play Again</button></div></form>`;
    radioContainer.innerHTML = "";
    radioContainer.insertAdjacentHTML("beforeend", finalScoreDisp);
    radioContainer.insertAdjacentHTML("beforeend", saveScoreForm);
    cardFooter.innerHTML = "";
    var saveBtn = document.getElementById("save-score");

    topRow.setAttribute("class", "d-flex justify-content-between");

    saveBtn.addEventListener('click', function(event) {
        event.preventDefault();
        saveBtn.setAttribute("disabled", "true");
        var initialInputEl = document.getElementById("user-initials");
        var initials = initialInputEl.value;
        var obj = {
            initials: initials,
            score: score
        }
        if (scoreHistory.length === 0) {
            showScoresBtn();
        }

        scoreHistory.push(obj);
        populateModal();
        setStorage();



    });
}


function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;

        timeLeft.textContent = `Time Remaining: ${secondsLeft} seconds`;

        if (secondsLeft <= 0 || quizOver) {
            if (scoreHistory.length !== 0) {
                document.getElementById("view-scores").removeAttribute("disabled");
            }


            timeLeft.textContent = "";
            clearInterval(timerInterval);
            endOfQuiz();
        }

    }, 1000);
}