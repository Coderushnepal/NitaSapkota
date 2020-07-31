var wordsList = `January
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

var splitList = wordsList.split('\n');
console.log(splitList);
var randomWord = splitList[Math.floor(Math.random() * splitList.length)].toLowerCase();
console.log(randomWord);
var wordLetters = randomWord.split('');
console.log(wordLetters);