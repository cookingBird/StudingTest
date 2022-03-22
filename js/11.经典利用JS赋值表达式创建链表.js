
var i = 10, root = {index: "NONE"}, node = root;

// 创建链表
while (i > 0) {
  node.next = node = new Object;
  node.index = i--;  // 这里可以开始给新node添加成员
}

// 测试
node = root;
while (node = node.next) {
  console.log(node.index);
}