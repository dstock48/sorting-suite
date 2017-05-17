function quickSort(array) {

  if (array.length < 2) {
    return array;
  }

  let p = array.length - 1;
  let pv = array[p];
  let less = [], more = [], same = [];


  for (let i = 0; i < array.length; i++) {
    if (array[i] === pv) {
      same.push(array[i]);
    } else if (array[i] < pv) {
      less.push(array[i]);
    } else {
      more.push(array[i]);
    }
  }
  return quickSort(less).concat(same, quickSort(more));
}

export default quickSort
