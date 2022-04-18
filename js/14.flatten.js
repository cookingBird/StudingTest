function flatten(arr) {
  if (arr.every((item) => Object.prototype.toString.call(item) != '[object Array]')) {
    return arr;
  } else {
    return arr.reduce((previous, current) => {
      if (Object.prototype.toString.call(current) != '[object Array]') {
        return [...previous, current];
      } else {
        return [...previous, ...flatten(current)];
      }
    }, []);
  }
}

console.log(flatten([1, 2, 3, [4, 5, 6]]));
