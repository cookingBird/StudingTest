// async function async1() {
// 	console.log('async1 start');
// 	Promise.resolve(async2()).then(() => {
// 							console.log('async1 end');
// 			})
// }
// async function async2() {
// 	 console.log('async2');
// Promise.resolve(async3()).then(() => {
// 							console.log(123);
// 			})
// }
// async function async3() {
// 	 console.log('async3');
// Promise.resolve(async4()).then(() => {
// 							console.log(456);
// 			})
// }
// async function async4() {
// 	await console.log('async4');
// console.log(789)
// }
// console.log('script start');
// setTimeout(function() {
// 	console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function(resolve) {
// 	console.log('promise1');
// 	resolve();
// }).then(function() {
// 	console.log('promise2');
// });
// console.log('script end');
setTimeout(_ => console.log(4))

new Promise(resolve => {
  resolve()
  console.log(1)
}).then(_ => {
  console.log(3)
  Promise.resolve().then(_ => {
    console.log('before timeout')
  }).then(_ => {
    Promise.resolve().then(_ => {
      console.log('also before timeout')
    })
  })
})

console.log(2)
