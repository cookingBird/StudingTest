function test() {
  var name = 'test';
  console.log(name);
  function test1() {
    console.log(name);
  }
  test1();
  return test1;
}
let test1 = test();
test1();
