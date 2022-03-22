function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= -1; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = temp;
        break;
      }
    }
  }
  return arr;
}
console.log(insertSort([3, 2, 1, 5, 6, 8]));
