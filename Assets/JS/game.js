//Jquery function
$(document).ready(function () {
    console.log("ready!");
var answerButton;

// Function that uses Jquery to remove the Start button when clicked from the beginning of the game
$("#start").on('click', function () {
    $("#start").remove();
    //runs the load questions funciton
    game.loadQuestion();
})

//Need to go to the doucment for the click
$(document).on('click', ".answer-button", function (e) {
    game.clicked(e);
})
$(document).on("click", "#reset", function(){
console.log("WTF")
    game.reset();
});

//Array of objects for the questions in the game==============================================================================
var questions = [
    {
        questions: "Which guitarist in the Rolling Stones passed away in 1969?",
        answers: ["Keith Richards", "Mick Taylor", "Brian Jones", "Ronnie Wood"],
        correctAnswer: "Brian Jones",
    },
    {
        questions: "What guitarist played the lead on Michael Jackson's Beat It?",
        answers: ["Jeff Beck", "Eddie Van Halen", "Joe Satriani", "Steve Vai"],
        correctAnswer: "Eddie Van Halen",
    },
    {
        questions: "Ritchie Blackmore played with Ronnie James Dio in what band?",
        answers: ["Dio", "Deep Purple", "Black Sabbath", "Rainbow"],
        correctAnswer: "Rainbow",
    },
    {
        questions: "Jimi Hendrix opened for what Tv show band in the late 60's?",
        answers: ["The Monkees", "The Partridge Family", "The Brady Bunch", "The Banana Splits"],
        correctAnswer: "The Monkees"
    },
    {
        questions: "Slash auditioned for which band before finding success with Guns N Roses?",
        answers: ["Slaughter", "Warrant", "Poison", "Def Leppard"],
        correctAnswer: "Poison",
    },
    {
        questions: "Who was the original guitarist for the Red Hot Chili Peppers?",
        answers: ["Hillel Slovak", "Dave Navarro", "John Frusciante", "Jack Sherman"],
        correctAnswer: "Hillel Slovak",
    },
    {
        questions: "How many Albums and Mini LP's has Buckethead released since his first album in 1992?",
        answers: ["25", "68", "201", "306"],
        correctAnswer: "306",
    },
    {
        questions: "Michael Schenker's first band was:",
        answers: ["UFO", "The Scorpions", "MSG", "Rush"],
        correctAnswer: "The Scorpions",
    },
    {
        questions: "Who was not a guitarist for Ozzy Osbourne's Solo career?",
        answers: ["Bernie Torme", "Tony Iommi", "Brad Gillis", "Joe Holmes"],
        correctAnswer: "Tony Iommi",
    },
    {
        questions: "What was Steve Vai's first band?",
        answers: ["Whitesnake", "David Lee Roth", "Alcatrazz", "Frank Zappa"],
        correctAnswer: "Frank Zappa",
    },
];

var game = {
    //variables in the object
    questions: questions,
    currentQuestion: 0,
    counter: 15,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    //functions in the object============================================================================================================
    // The countdown function will set a timer on each question
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter === 0) {
            console.log("TIMES UP");
            game.timeup();
        }
    },

    //Load the game
    loadQuestion: function () {
        //Sets the timer -every second lowers counter
        timer = setInterval(game.countdown, 1000);

        console.log("This is the Game countdown " + game.countdown);
        console.log(timer);
        //Posts the current question to the page
        $("#subwrapper").html("<h2 id = 'counter'>15</h2>");
        $("#subwrapper").append("<h2>" + questions[game.currentQuestion].questions + "</h2>");
        //Posts all of the answers to the page
        //loop for the array
       
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            var answerButton = $("<button>");
            answerButton.addClass("answer-button");
            answerButton.attr("id", "button-" + i);
            answerButton.data("name", questions[game.currentQuestion].answers[i]);
            answerButton.text(questions[game.currentQuestion].answers[i]);
            $("#subwrapper1").append(answerButton)
        }
        },

        nextQuestion: function() {
            $("#subwrapper1").empty();
            game.counter = 15;
            $("#counter").html(game.counter);
            game.currentQuestion++;
            game.loadQuestion();
        },
        timeup: function() {
            clearInterval(timer);
            game.unanswered++;
            $("#subwrapper").html('<h2> Keep Practicing!  YOU RAN OUT OF TIME!</h2>');
            $("#subwrapper").append('<h3> Correct Answer Was:  ' + questions[game.currentQuestion].correctAnswer +"</h3>");
            if(game.currentQuestion==questions.length-1){
                setTimeout(game.results, 2*1000);
            } else {
                setTimeout(game.nextQuestion, 2*1000);
            }
        },
        results: function() {
            $("#subwrapper1").empty();
            clearInterval(timer);
            $("#subwrapper").html('<h2> ALL DONE </h2> ');
            $("#subwrapper").append('<h3> Correct: '+ game.correct + '</h3');
            $("#subwrapper").append('<h3> InCorrect: '+ game.incorrect + '</h3');
            $("#subwrapper").append('<h3> Unanswered: '+ game.unanswered + '</h3');
            $("#subwrapper").append("<button id = 'reset'>PLAY AGAIN</button>");
        },

        clicked: function(e) {
            clearInterval(timer);
            if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
                game.answeredCorrectly();
            } else {
                game.answeredIncorrectly();
            }
        },
        answeredCorrectly: function() {
            console.log("you got it");
           clearInterval(timer);
           game.correct++;
           $("#subwrapper").html('<h2> YOU ROCK!  YOU GOT IT RIGHT!</H2>');
           if(game.currentQuestion==questions.length-1){
               setTimeout(game.results, 2*1000);
           } else {
               setTimeout(game.nextQuestion, 2*1000);
           }
        },
        answeredIncorrectly: function() {
            console.log("wrong");
            clearInterval(timer);
            game.incorrect++;
            $("#subwrapper").html('<h2> Keep Practicing!  YOU GOT IT WRONG!</H2>');
            $("#subwrapper").append('<h3> Correct Answer Was ' + questions[game.currentQuestion].correctAnswer +"</h3>");
            if(game.currentQuestion==questions.length-1){
                setTimeout(game.results, 2*1000);
            } else {
                setTimeout(game.nextQuestion, 2*1000);
            }
        },
        reset: function() {
            console.log("we are in reset button")
            game.currentQuestion =0;
            game.counter  =0;
            game.correct  =0; 
            game.incorrect =0; 
            game.unanswered =0;
           //clearInterval(timer);
           game.counter = 15;
           game.loadQuestion();
          
        },
    }
});