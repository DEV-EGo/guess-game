var guess = 0;
var computer = (Math.random()*100);
var guessRemaining = 10;
var guessMade = 0; 
var gameStatus;
var winner = false;

var input1 = document.querySelector("#ipbox");
var output1 = document.querySelector("#output");

var btn = document.getElementById("edwin_button");


function onMouseClick(){
   guess = parseInt(input1.value);
   guessRemaining--;
   guessMade++;
   gameStatus = "you have " + guessRemaining + "guesses remaining and you have made " + guessmade + "guess(es)only";

   if (guess > computer){
       output1.innerHTML = "your guess is bigger than the computer thinks"+gameStatus;
       if (guessRemaining<1){
           gameEnd();
       }

   }else if (guess < computer){
       output1.innerHTML = "your guess is smaller than the computer thinks"+gameStatus;
        if (guessRemaining<1){
       gameEnd();
   }

   }else if (guess === computer){
     winner = true;
     gameEnd();
   }
}
    function gameEnd(){
        if (winner){
        output1.innerHTML = "yayyy..you won"
        }else{
        output1.innerHTML = "the number was" +computer+"bad luck...try again"
        }
        btn.removeEventListener("click",onMouseClick);
        btn.disabled = true; 
        input1.disabled = true; 
    }