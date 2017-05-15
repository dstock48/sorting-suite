function bubbleSort (array) {
  for (var i = 0; i < array.length; i++) {

    for (var j = 0; j < array.length; j++) {
      // console.log(array);
      if (array[j] > array[j + 1]) {
        [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ]
      }
    }
    // console.log('---------');
  }
  return array;
}

export default bubbleSort;
