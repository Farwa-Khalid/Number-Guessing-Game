//Number Guessing Game
const min=1;
const max=100;
const ans=Math.floor(Math.random()*(max-min+1))+min;

console.log(ans);
let attempts=0;
let guess;
let running=true;
function checkGuess() {
  if (!running) return;
    const input = document.getElementById('guessInput');
    const guess = Number(input.value);
    const message = document.getElementById('message');

    if(isNaN(guess)){
        message.textContent=`Pls Enter Valid Number`;
    }
    
    else if(guess<min || guess>max){
     message.textContent=`Pls Enter Valid Number`;
    }
    else{
        attempts++;
        if(guess<ans){
             message.textContent=`TOO LOW!Pls Try again`;
        }
        else if(guess>ans){
             message.textContent=`TOO HIGH!Pls Try again`;
        }
        else{
            message.textContent=`CORRECT! The answer was ${ans}.It took you  ${attempts}Attempts To Guess The Right Answer`;
               running=false;
        }
    }
input.value = "";
    input.focus();}



    
 

