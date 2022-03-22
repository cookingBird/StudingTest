module.exports = test;
function test() {
  let add = function (a, b) {
    return a + b;
  };
  function minus(a, b) {
    return a - b;
  }
  console.log(add(3, 4));
  console.log(minus(10, 3));
}
test();
