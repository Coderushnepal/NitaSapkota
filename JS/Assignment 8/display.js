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
