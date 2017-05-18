function bubbleSort (array) {
  if (typeof array === 'string') { array = array.split('') }
  if (!(array instanceof Array)) { return "Error - argument must be an array or string" }
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ]
      }
    }
  }
  return array;
}

export default bubbleSort;
