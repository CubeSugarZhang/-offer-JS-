/*
˼·
����ָ�룬һ����һ����һ��������
*/

function findMidNodeOfList(head) {
    let pHead = head;
    let pTail = head;
    while(pTail && pTail.next) {
        pHead = pHead.next;
        pTail = pTail.next.next;
    }
    return pHead;
}