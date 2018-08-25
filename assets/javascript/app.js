let userPick = []; //Array to hold the user choices, will populate with null in a for loop later
let correctAnswers = 0;
let wrongAnswers = 0;
let missedAnswers = 0;
let timeDisplay;
let counter = 61;
let intervalID;
let questions = [
{
    question: "Daenerys",
    choices: ["ViKINGS", "BATTLESTAR", "GAME OF THRONS", "SUPERNATURAL"],
    answer: 2
},
{
    question: "FOX",
    choices: ["THE X-FILES", "ARROWS", "RIVERDALE", "TWIN PEAKS"],
    answer: 0
},
{
    question: "BOBBY",
    choices: ["SUPERGIRL", "GREY'S ANATOMY", "MILLIONS", "STAR TREK"],
    answer: 2
},
{
    question: "RICK",
    choices: ["THE SOPRANOS", "WESTWORLD", "THE WALKING DEAD", "THE WIRE"],
    answer: 2
},

{
    question: "Archie",
    choices: ["THE X-FILES", "ARROWS", "RIVERDALE", "TWIN PEAKS"],
    answer: 2
},
{
    question: "Don",
    choices: [" THE BIG BANG THEORY", "MR. ROBOT", " GAME OF THRONES", "  MAD MEN"],
    answer: 3
   
},

];
//To capture the missed responses
for (var i = 0; i < questions.length; i++) {
    userPick[i] = null;
}

//Quiz starts 
$(document).ready(function () {

    $("#startGame").click(function () {
       
        // setInterval to stop
        intervalID = setInterval(decrement, 1000);
    
        writeQuestions();

        $("#startGame").hide();

        SubmitButton();

        $("#submitQuiz").click(function () {
            //alert("clicked!");
            showResults();
        });
        
        // function for user pick
        $("input").click(function () {
            userPick[this.name] = this.value;
        });
    });
});


function writeQuestions() {
    for (var i = 0; i < questions.length; i++) {
        $("#formQuiz").append(questions[i].question + "</br>");
        
        for (var x = 0; x < questions[i].choices.length; x++) {
            $("#formQuiz").append("<label class='radio-inline'><input value='" + x + "' type='radio' name='" + i + "'>" + questions[i].choices[x] + "</label>");
        }
        $("#formQuiz").append("<br/><br/>");
    }
}

function SubmitButton() {
    $("#formSubmit").append("<button id='submitQuiz' class='btn btn-primary btn-lg'>Submit</button>");
}


function decrement() {
    counter--;
    $("#timeRemaining").html("<h2><mark>" + counter + " seconds remaining.</mark></h2>");
    if (counter === 0) {
        alert("Time Up!");
        showResults();
    }
}
//Write the results to the HTML
function showResults() {
    $("#formQuiz").hide();
    $("#timeRemaining").hide();
    $("#submitQuiz").hide();
    
    for (i = 0; i < questions.length; i++) {
        //correct answer count
        if (questions[i].answer == userPick[i]) {
            correctAnswers++;
        }
        // Unanswered questions count
        else if (userPick[i] === null) {
            missedAnswers++;
        }
        // wrong answer count
        else {
            wrongAnswers++;
        }
    }
    
    let DONE = $("#quizResults");
    $(DONE).append("<p>ALL DONE!</p>");
    $(DONE).append("<p>Correct Answers: " + correctAnswers + "</p>");
    $(DONE).append("<p>Incorrect Answers: " + wrongAnswers + "</p>");
    $(DONE).append("<p>Unanswered: " + missedAnswers + "</p>");
  
    clearInterval(intervalID);
}
