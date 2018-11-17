/*
��Ŀ��
���һ�������а�����������ҳ�������ڽڵ㣿
*/

/*
˼·��
�ο�22���еģ�����ָ�룬һ����2����һ����1��������ߵÿ��ָ�����׷�����ߵ�����ָ�룬���ʾ�л�
������ָ���ߵ�����ĩβ����û׷�ϣ�˵��û�л�

����ָ�������Ľڵ㣬һ���ڻ��У��Ӹýڵ�������ٴλص��ýڵ�ʱ�����ǻ��Ľڵ���

Ȼ����һ��ָ������n��(����ָ��֮��ľ���Ϊn-1)����һ��ָ���ڿ�ʼ���������ص�ʱ�����ǻ������
*/
function meetingNode(head) {
    if(head === null) {
        return null;
    }
    
    let pSlow = head;
    let pFast = head;
    
    while(pFast && pFast.next) {
        pFast = pFast.next.next;
        pSlow = pSlow.next;
        if(pFast === pSlow) {
            return pFast;
        }
    }
    return null;
}


function findEntryNodeOfLoop(head) {
    let meetNode = meetingNode(head);
    if(meetNode === null) {
        return null;
    }
    
    //��ȡ���еĽڵ���Ŀ
    let nodeCountInLoop = 1;
    let pNode1 = meetNode;
    while(meetNode !== pNode1.next) {
        pNode1 = pNode1.next;
        ++nodeCountInLoop;
    }
    
    //���ƶ�ǰ���ͷָ�뻷�ڵ����Ĳ���
    let pFast = head;
    let pSlow = head;
    for(let i=0; i<nodeCountInLoop; ++i) {
        pFast = pFast.next;
    }
    //Ȼ��һ���ƶ�������������ڽڵ�
    while(pFast !== pSlow){
        pFast = pFast.next;
        pSlow = pSlow.next;
    }
    return pFast;
}