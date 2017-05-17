function mergeSort (array) {

  if (array.length < 2) { return array }

  const mid = Math.floor(array.length / 2);
  const l = array.slice(0, mid);
  const r = array.slice(mid);

  return merge( mergeSort(l), mergeSort(r) )
}

function merge (l, r) {
  const output = [];

  while (l.length && r.length) {
    l[0] < r[0] ? output.push(l.shift()) : output.push(r.shift());
  }

  while (l.length || r.length) {
    l.length ? output.push(l.shift()) : output.push(r.shift());
  }
  return output;
}

export default mergeSort;



// ANOTHER MERGE APPROACH
//
// function merge (l, r) {
//   const output = []
//   const ttlLngth = l.length + r.length
//
//   for (let i = 0; i < ttlLngth; i++) {
//     if (l.length && r.length) {
//       l[0] < r[0] ? output.push(l.shift()) : output.push(r.shift())
//     } else {
//       l.length ? output.push(l.shift()) : output.push(r.shift())
//     }
//   }
//   return output;
// }













// TUTORIAL
//
// function mergeSort (array) {
//   if (array.length < 2) {   // if the length of the array is less than 2,
//     return array;           // return the array
//   }
//   const mid = Math.floor(array.length / 2);  // find midpoint of the array (rounding down)
//
//   return merge(  // return the result of the merge fn
//     mergeSort( array.slice(0, mid) ),  // which calls mergeSort on
//     mergeSort( array.slice(mid) )      // both halves of the array
//   );
// }
//
// function merge(left, right) { // merge receives both halves of the mergeSort arrays
//   const output = [];  // create empty array to push sorted items into
//
//   while (left.length > 0 && right.length > 0) { // while there are items in both arrays,
//     if (left[0] < right[0]) { // if the first item in the left array < the first item in the right array
//       output.push(left.shift());  // shift the first item out of the left and push it into output array
//     } else {
//       output.push(right.shift()); // shift the first item out of the right and push it into output array
//     }
//   }
//
//   // if one of the arrays is empty, keep taking the first item
//   // from the remaining array and placing it at the end of the output array
//   while (left.length > 0) {
//     output.push(left.shift());
//   }
//
//   while (right.length > 0) {
//     output.push(right.shift());
//   }
//
//   return output;  // return the output array back to the mergeSort fn
// }
