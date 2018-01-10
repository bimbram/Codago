function sum(...number) {
	var result = 0;
	for(var x=0; x<arguments.length; x++) {
		result += arguments[x];
	}
	return result;
}

sum(1,2,7);
