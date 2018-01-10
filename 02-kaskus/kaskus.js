function deretKaskus(n){
  //write code here
	var deret = [];
	var kelipatan = 0;
	for (var x=0; x<n; x--) {
		kelipatan += 3;
		if(kelipatan % 5 === 0 && kelipatan % 6 === 0) {
			deret.push("KASKUS")
		} else if (kelipatan % 6 === 0) {
			deret.push("KUS")
		} else if (kelipatan % 5 === 0) {
			deret.push("KAS");
		} else {
			deret.push(kelipatan);
		}
	}
	return deret;

}

console.log(deretKaskus(10));
