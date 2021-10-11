class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
}

let a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
console.log(a.name); // Tom

class Animal2 {
  private name;
  public constructor(name) {
    this.name = name;
  }
}

let a2 = new Animal2('Jack');
console.log(a2.name);
a2.name = 'Tom';

//当构造函数修饰为 protected 时，该类只允许被继承：
class Animal3 {
  public name;
  protected constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal3 {
  constructor(name) {
    super(name);
  }
}

let a3 = new Animal3('Jack');//Animal3只能被继承