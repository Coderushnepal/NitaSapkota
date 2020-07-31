//--------------------------Creating blanks to enter letters----------------------------------------
//----creating main div for dashlines
var letterDiv = document.createElement('div')               

letterDiv.id = 'letterDiv';
letterDiv.class = 'letterDiv';
letterDiv.style.color = 'white'
letterDiv.style.marginLeft = '350px'
document.body.appendChild(letterDiv);

//--------creating div for alreadyguessed letters
var alreadyGuessed = document.createElement('div')

alreadyGuessed.id = 'alreadyGuessed';
alreadyGuessed.class = 'alreadyGuessed';
document.body.appendChild(alreadyGuessed);

//-----creating div for wrongletter container
var wrongLetterContainer = document.createElement('div')

wrongLetterContainer.id = 'wrongLetterContainer';
wrongLetterContainer.class = 'wrongLetterContainer';
document.body.appendChild(wrongLetterContainer);

//----creating dashlines in main div
function countLetter() {
    for( var i=0; i < wordLetters.length; i++ ) {
        var dashline = document.createElement('div');
        dashline.classList.add('dash');
        var newDiv = document.getElementById('letterDiv');
        newDiv.appendChild(dashline);
    }
}
countLetter();
