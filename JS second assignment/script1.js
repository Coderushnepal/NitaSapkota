/*que1*/
var lists = 'Neeta Sapkota, Neha Shiwakoti, Smrity Dhakal, Kritika Baral, Trijha Thebe, Sindu Aryal, Elisha Bista, Shrijana Thulung, Shrijana Khatiwada, Sami Chakradhar, Kirtee Maharjan, Kusum Ranjitkar, Rachana kafle, Barsha Maharjan, Pooja Gurung, Bisikha Subedi';
var lists = lists.split(', '); // split string on comma space
console.log(lists);

function result(array) {
	return array.map(function(value, index) {
		var obj = {};
        var name = value.split(' ');
        var nameCapitalized = name[0].charAt(0).toUpperCase() + name[0].slice(1)
        var lastCapitalized = name[1].charAt(0).toUpperCase() + name[1].slice(1)
	    obj['id'] = index + 1;
	    obj['firstName'] = nameCapitalized;
	    obj['lastName'] = lastCapitalized;
	    return obj;
	});
};

console.log(result(lists));
console.log('\n\n')


/*que2*/
function Counts(array, letter) {
	var getArrayFromQ1 = result(array);
	var equalTo = getArrayFromQ1.filter(function(value) {
		return value.firstName[0] == letter.toUpperCase();
	});
	var startWith = equalTo.length;
	var startWithout = getArrayFromQ1.length - startWith;
	return letter + ': ' + startWith + ' and ' + startWithout;
};

console.log(Counts(lists, 's'));
console.log(Counts(lists, 'a'));

// Convert the array of the result in Question 1, in following format
//3
var res = function(array) {
	var getArrayFromQ1 = result(array);
	var organized = getArrayFromQ1.reduce(function(acc, value, index) {
		delete value.id;
		acc[index + 1] = value;
		return acc;
	}, {});
	return organized;
};

console.log(res(lists));
console.log('\n\n')


//Write a function that returns the longest sequence of consecutive zeroes in a binary string.
function longestZero(str) {
	return str.split('1').sort().pop().length;
  }
  
  console.log(longestZero("01100001011000"));
  console.log(longestZero("100100100"));
  console.log(longestZero("11111"));
  console.log(longestZero(""));
  console.log('\n\n')

  //Create a function that takes a string and replaces the vowels with another character.
//a = 1, e = 2, i = 3, o = 4, u = 5

function replaceVowel(str) {
	var strArr = str.split('');
	for (var i = 0; i < str.length; i++) {
	  var char = str[i].toLowerCase();
	  switch(char) {
		case "a":
			strArr[i] = 1;
		  break;
		case "e":
			strArr[i] = 2;
		  break;
		case "i":
			strArr[i] = 3;
		  break;
		case "o":
			strArr[i] = 4;
		  break;
		case "u":
			strArr[i] = 5;
		  break;
		default:
			strArr[i];                                     
	  }                                                    
	                                                       
	}
	return strArr.join('');                                // .join() bina array ma return garchha ["K", "R", 3, "T", 3, "K", 1]            
  }		                                                   // .join() pachi chai comma ma return garchha K,R,3,T,3,K,1 // .join('') pachi comma hatayera return garchha KR3T3K1
                                                    
console.log(replaceVowel("NEETA"));
console.log(replaceVowel("imaska"));
console.log(replaceVowel("sapkota"));
console.log(replaceVowel("manali"));
 




 



