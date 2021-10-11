//!主要介绍接口的另一个用途，对类的一部分行为进行抽象。
//?类实现接口
//实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类
// 有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），
// 用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。
interface Alarm {
	alert(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
	alert() {
			console.log('SecurityDoor alert');
	}
}

class Car implements Alarm {
	alert() {
			console.log('Car alert');
	}
}
//一个类实现多个接口
interface Light {
	lightOn(): void;
	lightOff(): void;
}

class Car2 implements Alarm, Light {
	alert() {
			console.log('Car alert');
	}
	lightOn() {
			console.log('Car light on');
	}
	lightOff() {
			console.log('Car light off');
	}
}

//?接口继承接口

interface Alarm {
	alert(): void;
}

interface LightableAlarm extends Alarm {
	lightOn(): void;
	lightOff(): void;
}

//?接口继承类（虽然在大多数OOP语言中这是不可行的，但是在typeScript这却是可以的）
//?为什么 TypeScript 会支持接口继承类呢？
// 实际上，当我们在声明 class Point 时，除了会创建一个名为 Point 的类之外，同时也创建了一个名为 Point 的类型（实例的类型）
// 所以我们既可以将 Point 当做一个类来用（使用 new Point 创建它的实例）：
class Point {
	x: number;
	y: number;
	constructor(x: number, y: number) {
			this.x = x;
			this.y = y;
	}
}

const p = new Point(1, 2);
// 也可以将 Point 当做一个类型来用（使用 : Point 表示参数的类型）：

function printPoint(p: Point) {
	console.log(p.x, p.y);
}

printPoint(new Point(1, 2));
//!接口继承类，只会继承类的实例属性和方法，静态属性和方法、构造函数不会继承
class Point2 {
	/** 静态属性，坐标系原点 */
	static origin = new Point(0, 0);
	/** 静态方法，计算与原点距离 */
	static distanceToOrigin(p: Point) {
			return Math.sqrt(p.x * p.x + p.y * p.y);
	}
	/** 实例属性，x 轴的值 */
	x: number;
	/** 实例属性，y 轴的值 */
	y: number;
	/** 构造函数 */
	constructor(x: number, y: number) {
			this.x = x;
			this.y = y;
	}
	/** 实例方法，打印此点 */
	printPoint() {
			console.log(this.x, this.y);
	}
}

interface PointInstanceType {
	x: number;
	y: number;
	printPoint(): void;
}

let p1: Point2;
let p2: PointInstanceType;
//!上例中最后的类型 Point2 和类型 PointInstanceType 是等价的。