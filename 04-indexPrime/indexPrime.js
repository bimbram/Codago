function indexPrime(param1) {
	var primeCount = 0;
	var bruteforceNumber = 2;
	while(primeCount !== param1) {
		checkPrime(bruteforceNumber)
		bruteforceNumber++;
	}

	function checkPrime(num) {
		for(var i=2; i<num; i++) {
			if(num % i === 0) {
				return false;
            }
		}
		primeCount++;


	}
	return bruteforceNumber-1

}

console.log(indexPrime(4)) //result => 7
console.log(indexPrime(500)) //result => 3571
console.log(indexPrime(37786)) //result => 450881
