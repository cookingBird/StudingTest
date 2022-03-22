function listNode(val) {
  this.value = val;
  this.next = null;
}
function generateList(list = []) {
  let nodeArr = list.map((item) => new listNode(item));
  let head;
  let firstLink = true;
  while (nodeArr.length) {
    let node = nodeArr.shift();
    if (firstLink) head = node;
    node.next = nodeArr[0];
    firstLink = false;
  }
  return head;
}

function printNodeList(head) {
  let temp = head;
  while (temp) {
    console.log(temp);
    temp = temp.next;
  }
}

function getTargetPosNode(head, pos) {
  let temp = head;
  for (let i = 1; i < pos; i++) {
    temp = temp.next;
  }
  return temp;
}
function getTargetPosNextNode(head, pos) {
  return getTargetPosNode(head, pos + 1);
}
function getTargetPosPreNode(head, pos) {
  return getTargetPosNode(head, pos - 1);
}

function spliceTargetNode(head, pos) {
  let targetNode = getTargetPosNode(head, pos);
  let targetPreNode = getTargetPosPreNode(head, pos);
  let targetNextNode = getTargetPosNextNode(head, pos);
  targetPreNode.next = targetNextNode;
  targetNode.next = null;
  return targetNode;
}

function insertNodeToPos(head, pos, pendingNode) {
  let targetNode = getTargetPosNode(head, pos);
  pendingNode.next = targetNode;
  if (pos === 1) return pendingNode;
  let targetPreNode = getTargetPosPreNode(head, pos);
  targetPreNode.next = pendingNode;
  return head;
}

function reverseBetween(head, m, n) {
  // write code here
  let timer = n - m;
  let headNode = head;
  for (let i = 0; i < timer; i++) {
    let pendingNode = spliceTargetNode(headNode, n);
    headNode = insertNodeToPos(headNode, m + i, pendingNode);
  }
  return headNode;
}

let nodeList = generateList([1, 2, 3]);
// console.log(nodeList);
let node5 = getTargetPosNode(nodeList, 3);
// console.log(node5);
let reversedNodeList = reverseBetween(nodeList, 1, 3);
console.log(reversedNodeList);
