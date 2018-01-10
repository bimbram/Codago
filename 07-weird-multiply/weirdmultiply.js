function weirdMultiply(sentence) {
	if(sentence.toString().split('').length === 1) {
		return sentence;
	} else {
		var numberString = sentence.toString().split('')
		return weirdMultiply(multiply(numberString));
	}

	function multiply(value){
		var number = 1;
		for(var i=0; i<numberString.length; i++) {
			number *= Number(numberString[i]);
		}
		return number;
	}  
}
console.log(weirdMultiply(39)); // -> 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4
console.log(weirdMultiply(999)); // ->  9 * 9 * 9 = 729 -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(weirdMultiply(3)); // -> 3 karena telah satu digit
