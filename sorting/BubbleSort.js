const bubbleSort = (array) => {
  let i,j,ln,temp;
  ln = array.length;
  while(ln--) {
    for(i=0, j=1; i < ln; i++, j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array [j];
        array[j] = temp;
      }
    }
  }
  return array;
}
// IN: unsorted array of n size
// OUT: sorted array of n size

// FOR the length of the array 
// IF array[n] is greater than array[n+1]
// SWAP array[n] and array[n+1]
// RETURN array