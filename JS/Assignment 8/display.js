var figureParts = document.getElementsByClassName('figure-part');
console.log(typeof(figureParts));

var guessedWords = new Set();
var wrongWords = new Set();


function compareMatchTwo() {
    document.addEventListener('keypress' , function(event) {

    var alreadyGuessed = document.getElementById('already-guessed');
    document.body.appendChild(alreadyGuessed);

    
        if( Array.from(guessedWords).includes(event.key)) {
            
            console.log(alreadyGuessed);
            alreadyGuessed.style.display = 'block';
            alreadyGuessed.innerHTML = event.key +" has already been guessed";
            
        } else {
            alreadyGuessed.style.display = 'none';
            guessedWords.add(event.key);
             
            if (randomNamesMonths.includes(event.key)) {
                    for (var j=0; j < randomNamesMonths.length; j++) {
                        
                        if (event.key == randomNamesMonths[j]) {
                            displayRightGuess(event.key , j);
                
                        
                        }
                    } 
            }else {
                wrongWords.add(event.key);
                displayWrongGuess(wrongWords);
            } 
    
        }
    
    });
}
compareMatchTwo();

function displayRightGuess(value, index) {
    const letterContainer = document.getElementById('letter-container').children[index];
	letterContainer.innerHTML = value;
}


window.onload = function() {
   Array.from(figureParts).forEach((value) => {
        value.style.visibility = 'hidden';
   });
};

function displayWrongGuess(wrongWords) {
    
    var wrongLetterContainerr = document.getElementById('wrong-letter-container');
    wrongLetterContainerr.innerHTML = "Wrong Guess" +' :'+ Array.from(wrongWords).join(',');
    document.body.appendChild(wrongLetterContainerr);
    

    displayFigureParts();
    gameover();
   
}


var k = 0;
function displayFigureParts() {
    console.log(figureParts[k]);
    figureParts[k].style.visibility = 'visible';
    k++;
}

function gameover() {
    var gameOver = document.getElementById('game-over');
    var playAgainBtn = document.getElementById('game-over-btn');

    if(Array.from(wrongWords).length === figureParts.length) {

        gameOver.innerHTML = 'Game Over!!!';
        playAgainBtn.innerHTML = 'Play Again';

        document.body.appendChild(gameOver);
        gameOver.appendChild(playAgainBtn);
        gameOver.style.display = 'block';

        
        playAgainBtn.addEventListener('click' , function(){
            window.location.reload();
        
        });

    } else {
        gameOver.style.display = 'none';
    }
}


