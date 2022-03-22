
var a = {n:1}, ref = a;
a.x = a = {n:2};
console.log(a.x); // --> undefined
console.log(ref.x); // {n:2}