
exports.min = function min (array) {
  return (!array)? 0 : (array.length)? Math.min.apply(null, array) : 0;
}

exports.max = function max (array) {
  return (!array)? 0 : (array.length)? Math.max.apply(null, array) : 0;
}

exports.avg = function avg (array) {
  return (!array)? 0 : (array.length)? array.reduce((sum, e) => {return sum + e}, 0) / array.length : 0;
}
