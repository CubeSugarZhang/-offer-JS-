/**
��Ŀ��
��һ������������У�ɾ���ظ��Ľڵ�
*/
function Node(val) {
    this.val = val;
    this.next = null;
}

function deleteDuplicate(head) {
    //�п���ͷ�����ظ����������Լ�����һ��ͷ���
    let tempHead = new ListNode('head');
    tempHead.next = head;
    let pre = tempHead,
        //Ϊ�˲��ı�ͷ����ָ��
        currentNode = head;
        
    while(currentNode) {
        //������ظ��Ľڵ㣬��ô��ǰ�ڵ�ָ����һ���ڵ㣬�����ж��Ƿ��ظ�
        while((currentNode.next !== null) && (currentNode.next.val === currentNode.val)) {
            currentNode = currentNode.next;
        }
        
        //��ǰ�ڵ�λ��û���ƶ�����pre.next(����ָ��ѭ����ʼǰ���Ǹ���ǰ�ڵ�)û�б䣬����֮ǰ��currentNode
        if(pre.next === currentNode) {
            //˵����ǰ�ڵ�����һ���ڵ㲻�ظ�������pre���currentNode�������޸�pre����һ���ڵ㣬ͬʱcurrentNodeָ����һ���ڵ�
            pre = currentNode;
            currentNode = currentNode.next;
        } else {
            //�ƶ��ˣ�˵�����ظ���ֵ����ôcurrentNodeָ���ظ���node��ͬʱpre.nextҲָ�����node(���Ӳ��ظ���ֵ)
            currentNode = currentNode.next;
            pre.next = currentNode;
        }
    }
    return tempHead.next;
}