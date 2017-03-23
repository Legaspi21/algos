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
