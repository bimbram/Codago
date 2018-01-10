function spiral(param1) {
  var totalMatrixArea = param1*param1;
  var matrix = createMatrix(param1);

  var topFixed = 0,
      rightFixed = param1,
      bottomFixed = param1,
      leftFixed = -1;

  var topIncrementStart = 0,
      rightIncrementStart = 0,
      bottomIncrementStart = param1-1,
      leftIncrementStart = param1-1;

  var topIncrement = topIncrementStart,
      rightIncrement = rightIncrementStart,
      bottomIncrement = bottomIncrementStart,
      leftIncrement = leftIncrementStart;

  var topLength = param1,
      rightLength = param1,
      bottomLength = param1,
      leftLength = param1;

  var resultArray = [];

  while(totalMatrixArea !== 0) {

    //Top
    for(var a = 0; a<topLength; a++) {
      resultArray.push(matrix[topFixed][topIncrement]);
      totalMatrixArea--;
      topIncrement++;
    }
    if(totalMatrixArea === 0) {return resultArray}
      rightLength--;
      rightFixed--;
      rightIncrementStart++;
      rightIncrement = rightIncrementStart;

      leftLength--;

    //Right
    for(var b = 0; b<rightLength; b++) {
      resultArray.push(matrix[rightIncrement][rightFixed])
      totalMatrixArea--;
      rightIncrement++;
    }
    if(totalMatrixArea === 0) {return resultArray}
      bottomLength--;
      bottomFixed--;
      bottomIncrementStart--;
      bottomIncrement = bottomIncrementStart;

      topLength--;

    //Bottom
    for(var c=0; c<bottomLength; c++) {
      resultArray.push(matrix[bottomFixed][bottomIncrement])
      totalMatrixArea--;
      bottomIncrement--;
    }
    if(totalMatrixArea === 0) {return resultArray}
      leftLength--;
      leftFixed++;
      leftIncrementStart--;
      leftIncrement = leftIncrementStart;

      rightLength--;

    //Left
    for(var d = 0; d<leftLength; d++) {
      resultArray.push(matrix[leftIncrement][leftFixed]);
      totalMatrixArea--;
      leftIncrement--;
    }
    if(totalMatrixArea === 0) {return resultArray}
      topLength--;
      topFixed++;
      topIncrementStart++
      topIncrement = topIncrementStart;

      bottomLength--;
  }

  function createMatrix(size) {
    var arrayXY = new Array(size);
    var number = 0;
    for (var x = 0; x < size; x++) {
        arrayXY[x] = new Array(size);
        for(var y = 0; y<size; y++) {
          arrayXY[x][y] = number;
            number++
          }
        }
      return arrayXY;
    }

}

console.log(spiral(5));
