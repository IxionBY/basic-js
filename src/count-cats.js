module.exports = function countCats(matrix) {
  var sum = 0;
  var matrixCol = [];
  for (var i = 0; i < matrix.length; i++){
    matrixCol = matrix[i];
    for ( var j = 0; j < matrixCol.length; j++){
      if( matrixCol[j] != "^^") continue;
      sum++;
  }
} return sum;

};