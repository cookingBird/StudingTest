function ListNode(val) {
  this.value = val
  this.next = null
}

function getList(arr) {
  if (!arr) return
  if (arr.length === 1) return new ListNode(arr[0])
  let i = 0
  let pHead = new ListNode(arr[i])
  let tailHead = pHead
  while (arr[++i]) {
    tailHead.next = new ListNode(arr[i])
    tailHead = tailHead.next
  }
  return pHead
}

function printList(pHead) {
  console.log(pHead)
  while ((pHead = pHead.next)) {
    console.log(pHead)
  }
}

function RevertListInRegion(pHead, begin, end) {
  //处理输入错误
  if (begin === undefined || end === undefined || pHead === undefined)
    return pHead
  //处理输入区间错误
  if (begin < 0 || begin > end || begin === end) return pHead
  //条件满足
  let dummyHead = new ListNode(0)
  dummyHead.next = pHead
  let preStart = dummyHead
  let startNode = pHead
  for (let i = 1; i < begin; i++) {
    preStart = startNode
    startNode = startNode.next
  }
  //revert
  for (let i = 0; i < end - begin; i++) {
    let tmp = startNode.next
    startNode.next = tmp.next
    tmp.next = preStart.next
    preStart.next = tmp
  }
  return dummyHead.next
}

let aList = getList([3, 5, 1, 6, 5, 4])
// printList(aList)
let rList = RevertListInRegion(aList, 2, 3)
printList(rList)
