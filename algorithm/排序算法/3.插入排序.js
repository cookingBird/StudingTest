function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = temp;
        break;
      }
      if (j === 0) arr[0] = temp;
    }
  }
  return arr;
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function myInsertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = temp;
        break;
      }
      if (j === 0) arr[0] = temp;
    }
  }
  return arr;
}
console.log(insertSort([3, 2, 1, 9, 7, 8, 2, 1]));
console.log(myInsertSort([3, 2, 1, 5, 6, 8]));
