/**
 * @function dayis = (?arg: <T>) => any<T>
 * 
 * 通过某种关系，
 * 将某一参数映射为另一参数
 * 
 * 拓展：
 * 通过某种关系，将某一参数列表映射为另一参数列表
 */


function dayis(){
	switch (new Date().getDay()) {
      case 0:
        return "周日";
        // break;
      case 1:
        return "周一";
        // break;
      case 2:
        return "周二";
        // break;
      case 3:
        return "周三";
        // break;
      case 4:
        return "周四";
        // break;
      case 5:
        return "周五";
        // break;
      case  6:
        return "周六";
	}
}

console.log(dayis())