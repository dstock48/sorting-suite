function quickSort(array) {
  if (typeof array === 'string') { array = array.split('') }
  if (!(array instanceof Array)) { return "Error - argument must be an array or string" }
  if (array.length < 2) { return array }

  let pivotValue = array[(array.length - 1)];
  let less = [], more = [], same = [];

  for (let i = 0; i < array.length; i++) {
    let currentEl = array[i];

    if (currentEl > pivotValue) {
      more.push(currentEl);
    } else if (currentEl < pivotValue) {
      less.push(currentEl);
    } else {
      same.push(currentEl);
    }
  }

  return [...quickSort(less), ...same, ...quickSort(more)];
}

export default quickSort
