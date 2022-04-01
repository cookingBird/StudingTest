function selectSort(arr) {
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function mySelectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}
console.log(selectSort([5, 3, 4, 6, 9, 7]));
console.log(mySelectSort([5, 3, 4, 6, 9, 7]));
