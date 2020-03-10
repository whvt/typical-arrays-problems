
exports.min = function min (array) {
  if (!array || !array.length) return 0;
  return Math.min(...array);
}
exports.max = function max (array) {
  if (!array || !array.length) return 0;
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0; else {
  var sum = 0;
for( let i = 0; i < array.length; i++ ){
    sum += parseInt( array[i], 10 ); 
}

var avg = sum/array.length;
return avg;
} 
}
