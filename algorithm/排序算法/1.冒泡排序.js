function bubbleSort(arr) {
  let temp = null;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      // console.log(i, j)
      if (arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let arr = [1, 3, 5, 10, 20, 50, 6, 9, 10];
console.log(bubbleSort(arr));
