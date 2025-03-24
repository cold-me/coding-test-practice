/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    let currentPointer = head;
    let answer = false
    const set = new Set();
    while(currentPointer !== null){
        if(set.has(currentPointer)){
            answer = true;
            break;
        } 
        set.add(currentPointer);
        currentPointer = currentPointer.next;
    }
    return answer
};