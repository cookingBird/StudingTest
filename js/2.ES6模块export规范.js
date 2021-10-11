function show(message){
    console.log('func show');
    console.log(message);
}
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year, show };

/////////////////
export function show(message){
    console.log('func show');
    console.log(message);
}

//*以别名导出
function v1() {  }
function v2() {  }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

//! export导出的必须是接口{}
//! 直接导出任何变量都会报错
//! 报错
//! export 1;

//! 报错
//! var m = 1;
//! export m;

// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};

//! 报错
//! function f() {}
//! export f;

// 正确
export function f() {};

// 正确
function f() {}
export {f};