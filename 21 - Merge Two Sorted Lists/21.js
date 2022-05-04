/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!(list1 && list2)) {
    return list1 || list2;
  }

  let p = list1;
  let q = list2;
  let r = null;

  if (p.val < q.val) {
    r = p;
    p = p.next;
  } else {
    r = q;
    q = q.next;
  }

  let s = r;

  while (p && q) {
    if (p.val < q.val) {
      s.next = p;
      p = p.next;
    } else {
      s.next = q;
      q = q.next;
    }

    s = s.next;
  }

  if (p || q) {
    s.next = p || q;
  }

  return r;
};
