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


 



