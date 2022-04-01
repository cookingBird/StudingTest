function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    //已确定位置arr[partitionIndex]元素不再参与排序
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  // 分区操作
  var pivot = left, // 设定基准值（pivot）
    index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quickSort([11, 3, 2, 23, 13, 4, 2, 15, 26, 1, 23, 5, 34, 6]));

function myQuicKSort(arr, start, end) {
  start = typeof start === 'number' ? start : 0;
  end = typeof end === 'number' ? end : arr.length - 1;
  if (start > end) return new Error('start > end');
  let partitionIndex = myPartition2(arr, start, end);
  myQuicKSort(arr, start, partitionIndex - 1);
  myQuicKSort(arr, partitionIndex + 1, end);
  return arr;
}

function myPartition(arr, start, end) {
  let pivot = start;
  let index = start + 1;
  for (let i = index; i <= end; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, smallerIndex - 1);
  return smallerIndex - 1;
}

function myPartition2(arr, start, end) {
  let pivot = start;
  let index = start + 1;
  for (let i = index; i <= end; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

console.log(myQuicKSort([1, 5, 2, 6, 3, 7, 8, 23, 4, 12, 15]));
