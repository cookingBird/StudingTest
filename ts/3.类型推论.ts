// ***类型推论
// 以下代码虽然没有指定类型，但是会在编译的时候报错：

let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
// 事实上，它等价于：

// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;