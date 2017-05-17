function quickSort(array) {

  if (array.length < 2) {
    return array;
  }

  let p = array.length - 1;
  let pv = array[p];
  let less = [], more = [], same = [];

  for (let i = 0; i < array.length; i++) {
    let ce = array[i];

    if (ce === pv) {
      same.push(ce);
    } else if (ce < pv) {
      less.push(ce);
    } else {
      more.push(ce);
    }
  }
  return quickSort(less).concat(same, quickSort(more));
}

export default quickSort
