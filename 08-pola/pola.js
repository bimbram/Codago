function pola(str) {
  var splitStringArray = str.split(' ')
  var threeVariables = variableClassifier(splitStringArray[0], splitStringArray[2], splitStringArray[4])
  var numberVariableSplit = threeVariables.number.split('');
  var splitResult = threeVariables.result.split('');
  var possibleNumberDatabase = databaseNumberCreator(numberVariableSplit, findIndex(threeVariables.number))
  var possibleResult = databaseNumberCreator(splitResult, findIndex(threeVariables.result))
  var totalResult = matchingAnswer(possibleNumberDatabase, threeVariables.constant, possibleResult)

  function variableClassifier(number1, number2, result) {
    var number = 0;
    var constant = 0;
    if(hashSymbolChecker(number1) === true) {
      number = number1;
      constant = number2;
    } else {
      number = number2;
      constant = number1;
    }
    return {number: number, constant: constant, result: result};
  }

  function matchingAnswer(number, constant, possibleResult){
    for(var j=0; j<number.length; j++) {
      for(var z=0; z<number.length; z++) {
        if(number[j] * constant === possibleResult[z]) {
          return {number: number[j].toString(), result: possibleResult[z].toString()};
        }
      }
    }
  }

  function databaseNumberCreator(splitNumber, index) {
    var databaseNumber = []
    for(var x =0; x<10; x++) {
      splitNumber[index] = "" + x
      databaseNumber.push(Number(splitNumber.join('')))
    }
    return databaseNumber;
  }

  function findIndex(string){
    return string.match('#').index;
  }


  function hashSymbolChecker(numberString) {
    if(numberString.match('#') === null) {
      return false;
    } else {
      return true;
    }
  }
  return [Number(totalResult.number[findIndex(threeVariables.number)]), Number(totalResult.result[findIndex(threeVariables.result)])];
}

console.log(pola("42#3 * 188 = 80#204"));
// result: [8, 5]
console.log(pola("8#61 * 895 = 78410#5"));
// [7,9]


//number1.match('#').index
