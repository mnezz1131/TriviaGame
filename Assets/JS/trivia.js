//Array of objects for the questions in the game
let triviaQuestions = [
{
    q:      "Which guitarist in the Rolling Stones passed away in 1969?",
    a:      "(A) Keith Richards",
    b:      "(B) Mick Taylor",
    c:      "(C) Brian Jones",
    d:      "(D) Ronnie Wood",
    answer: "C"
},
{
    q:     "What guitarist played the guitar solo in Michael Jackson's Beat it?",
    a:      "(A) Jeff Beck",
    b:      "(B) Eddie Van Halen",
    c:      "(C) Joe Satriani",
    d:      "(D) Steve Vai",
    answer: "B"
},
{
    q:       "Ritchie Blackmore played with Ronnie James Dio in what band?",
    a:      "(A) Dio",
    b:      "(B)Deep Purple",
    c:      "(C) Black Sabbath",
    d:      "(D) Rainbow",
    answer: "D"
},   
{
    q:      "Jimi Hendrix opened for what Tv show band in the late 60's?",
    a:      "(A) The Monkees",
    b:      "(B) The Partridge Family",
    c:      "(C) The Brady Bunch",
    d:      "(D) The Banana Splits",
    answer: "A"
},   
{
    q:       "Top hatted Guitar Hero Slash audtioned for which band before finding success with Guns N Roses?",
    a:      "(A) Slaughter",
    b:      "(B) Warrant",
    c:      "(C) Poison",
    d:      "(D) Def Leppard",
    answer: "C"
},   
{
    q:      "Who was the original guitarist for the Red Hot Chili Peppers?",
    a:      "(A) Hillel Slovak",
    b:      "(B) Dave Navarro",
    c:      "(C) John Frusciante",
    d:      "(D) Jack Sherman",
    answer: "A"
},   
{
    q:      "How many Albums and Mini LP's has Buckethead released since his first album in 1992?",
    a:      "(A) 25",
    b:      "(B) 68",
    c:      "(C) 201",
    d:      "(D) 306",
    answer: "D"
},   
{
    q:       "Michael Schenker's first band was:",
    a:      "(A) UFO",
    b:      "(B) The Scorpions",
    c:      "(C) MSG",
    d:      "(D) Rush",
    answer: "B"
},   
{
    q:       "Who was not a guitarist for Ozzy Osbourne's Solo career?",
    a:      "(A) Bernie Torme",
    b:      "(B) Tony Iommi",
    c:      "(C) Brad Gillis",
    d:      "(D) Joe Holmes",
    answer: "B"
},   
{
    q:      "What singer has played with Michael Schenker, Ritchie Blackmore, Steve Vai, Yngwie Malsteen?",
    a:      "(A) Robert Plant",
    b:      "(B) David Lee Roth",
    c:      "(C) Graham Bonnett",
    d:      "(D) Alice Cooper",
    answer: "C"
},   
];

score = 0;
//Test to print out the array of question objects
console.log(triviaQuestions[0]);




$( document ).ready(function() {
    console.log( "ready!" );
});

//=====================================================================================================
//var userResponse = "";
//Functions to get the users repsonse click and assigan values to buttons
 
$("#answer1").click (function() {
    alert("test");
//need to assign the value of (triviaQuestions[0].a) to #answer1
  });

  $("#answer2").click (function() {
    alert("test");
   //need to assign the value of (triviaQuestions[0].b) to #answer1
  });
  $("#answer3").click (function() {
    alert("test");
   //need to assign the value of (triviaQuestions[0].c) to #answer1
  });
  $("#answer4").click (function() {
    alert("test");
    //need to assign the value of (triviaQuestions[0].d) to #answer1
  });

//var startGame = function(){}
    //Reset
  
//==============================================================================
//Timer for counting down the seconds in the game
//===================================================================================================================================
var count=11;

var counter=setInterval(timer, 1000);
function timer(){
    count=count-1;
    if (count<= -1){
        clearInterval(counter);
        return;
    } console.log
    $('#timeRemain').html(count);
}
//==================================================================================================================================

//Loop to display questions and answer options to the document  should be a function

for (var i=0; i < triviaQuestions.length; i++) {
    console.log(triviaQuestions[0].q)
    $('#questions').html(triviaQuestions[0].q)  // Asks the question
    $('#answer1').html(triviaQuestions[0].a)    // Answer option 1    
    $('#answer2').html(triviaQuestions[0].b)    // Answer option 2
    $('#answer3').html(triviaQuestions[0].c)    // Answer option 3
    $('#answer4').html(triviaQuestions[0].d)    // Answer option 4 
}
//============================================================================
