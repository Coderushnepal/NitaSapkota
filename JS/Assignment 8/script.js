var nameList = `January
February
March
April
May
June
July
August
September
October
November
December`;

var names = nameList.split('\n');
var randomNames = names[Math.floor(Math.random() * names.length)].toLowerCase();


var titleDiv = document.createElement('div');
var heading = document.createElement('h1');
var subHeading = document.createElement('p');

titleDiv.id = 'titlediv';
titleDiv.classList.add('titlediv');
titleDiv.style.position = 'absolute';
titleDiv.style.textAlign = 'center';

heading.innerHTML = 'Hangman';
heading.style.fontWeight = 'bold';
heading.style.color = '#ffffff';


subHeading.innerHTML = 'Find the hidden word';
subHeading.style.color = '#ffffff';

document.body.appendChild(titleDiv);
titleDiv.appendChild(heading);
titleDiv.appendChild(subHeading);


var randomNamesMonths = randomNames.split(''); 


console.log(randomNamesMonths);  


var letterCount = function() {
    for( var i=0; i < randomNamesMonths.length; i++ ) {
        var newDiv = document.createElement('div');
        newDiv.classList.add('letter');
        var divisions = document.getElementById('letter-container');
        divisions.appendChild(newDiv);
    }
}

letterCount();

