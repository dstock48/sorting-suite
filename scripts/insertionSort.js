function insertionSort (array) {
  if (typeof array === 'string') { array = array.split('') }
  if (!(array instanceof Array)) { return "Error - argument must be an array or string" }
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j >= 0; j--) {
      if (array[j + 1] < array[j]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]]
      }
    }
  }
  return array;
}

export default insertionSort;


// Found online
//
// for (let i = 1; i < array.length; i++) {
//   let value = array[i];
//   let j = i - 1;
//
//   while (j >= 0 && array[j] > value) {
//     array[j + 1] = array[j];
//     j--;
//   }
//   array[j + 1] = value;
// }
// return array;
