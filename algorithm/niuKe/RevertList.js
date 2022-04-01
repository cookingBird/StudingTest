function ListNode(val) {
  this.value = val
  this.next = null
}

function RevertList(pHead) {
  if (pHead.next == null || !pHead) return pHead
  let pReversedHead = RevertList(pHead.next)
  pHead.next.next = pHead
  pHead.next = null
  console.log(pHead)
  return pReversedHead
}

function RevertList2(pHead) {
  /**
   * pHead.next === null
   * 包含以下几种情况
   * 1.返回最后一个节点
   * 2.如果只有一个节点，直接返回
   * 3.输入为空，返回undefined
   */
  if (!pHead || pHead.next === null) return pHead
  //递归
  let pRevertHead = RevertList2(pHead.next)
  //递归执行
  //从倒数第二个元素开始
  pHead.next.next = pHead
  pHead.next = null
  //递归传递 pRevertHead
  //其值不改变,即最后一个节点
  return pRevertHead
}

function revertListByLoop(pHead) {
  if (!pHead || pHead.next == null) return pHead
  let currNode = pHead
  let reverseHead = null
  //循环条件
  while (currNode) {
    //循环体
    let temp = currNode.next
    currNode.next = reverseHead
    reverseHead = currNode
    //条件自增
    currNode = temp
  }
  return reverseHead
}

function revertListByLoop2(pHead) {
  if (!pHead || pHead.next === null) return pHead
  let currNode = pHead
  let revertHead = null
  let temp = null
  do {
    //循环条件
    temp = currNode.next
    currNode.next = revertHead
    revertHead = currNode
    //条件自增
  } while ((currNode = temp))
  return revertHead
}

function revertListByRecursion(pHead) {
  if (!pHead || pHead.next === null) return pHead
  let pRevertHead = revertListByRecursion(pHead.next)
  let postHead = pHead.next
  postHead.next = pHead
  pHead.next = null
  return pRevertHead
}

function getList(arr) {
  let pHead = undefined
  let tailHead = undefined
  while (arr.length) {
    if (!pHead) {
      tailHead = pHead = new ListNode(arr.shift())
    } else {
      tailHead = tailHead.next = new ListNode(arr.shift())
    }
  }
  return pHead
}

function printList(head) {
  if (!head || head.next == null) return console.log(head)
  let pHead = head
  console.log(pHead)
  while ((pHead = pHead.next)) {
    console.log(pHead)
  }
}

let aList = getList([3, 5, 1])
// console.log(aList)
let head = revertListByLoop2(aList)
printList(head)
