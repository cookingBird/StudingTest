function listNode(val) {
  this.value = val;
  this.next = null;
}

function generateList(val = []) {
  let nodeArr = val.map((item) => new listNode(item));
  let headNode;
  let firstNode = true;
  while (nodeArr.length) {
    let node = nodeArr.shift();
    node.next = nodeArr[0];
    if (firstNode) headNode = node;
    firstNode = false;
  }
  return headNode;
}

function printNodeList(head) {
  while (head) {
    console.log(head);
    head = head.next;
  }
}

function getTailNode(head) {
  let temp = head;
  let tail;
  do {
    tail = temp;
  } while ((temp = temp.next));
  return tail;
}

function getPreTailNode(head, tail) {
  let temp = head;
  let tailPre;
  do {
    tailPre = temp;
  } while ((temp = temp.next) && temp != tail);
  return tailPre;
}

function ReverseList(pHead) {
  let revertHead;
  let firstRevert = true;
  // write code here
  while (pHead.next) {
    let tail = getTailNode(pHead);
    if (firstRevert) revertHead = tail;
    let tailPre = getPreTailNode(pHead, tail);
    tail.next = tailPre;
    tailPre.next = null;
    firstRevert = false;
  }
  return revertHead;
}

let testArr = [1, 2, 3];
let nodeHead = generateList(testArr);
printNodeList(nodeHead);
let tailNode = getTailNode(nodeHead);
console.log('tailNode', tailNode);
let tailPreNode = getPreTailNode(nodeHead, tailNode);
console.log('tailPreNode', tailPreNode);
let revertedList = ReverseList(nodeHead);
printNodeList(revertedList);
