const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const arrayLength = array.length;
  const pivotPosition = Math.floor(arrayLength / 2);
  const pivotValue = array[pivotPosition];
  const less = [],
        more = [],
        same = [];
  for (let i = 0; i < arrayLength; i++) {
    if (array[i] === pivotValue) {
      same.push(array[i]);
    } else if (array[i] < pivotValue) {
      less.push(array[i]);
    } else {
      more.push(array[i])
    }
  }
  return quickSort(less).concat(same, quickSort(more));
}

// quickSort([4,3,6,1,7,1,2,44,12,65,878,2342,454,2,5,3,0,-1,34,6])
// => [ -1, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 12, 34, 44, 65, 454, 878, 2342 ]
   