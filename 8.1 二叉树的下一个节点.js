/*
��Ŀ��
����һ�������������е�һ���ڵ㣬����ҳ�����������е���һ���ڵ㣿���еĽڵ�����������ֱ�ָ�������ӽڵ��ָ�룬����һ��ָ�򸸽ڵ��ָ��
*/

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
}

/*
˼·��
����ýڵ�����������˵����ʱ��������Ѿ����˸��ڵ㣬��һ���ڵ���������������������ӽڵ㣻
����ýڵ�û�������������ýڵ��������ڵ�����ӽڵ㣬��ô������һ���ڵ�������ĸ��ڵ㣻
����ýڵ��û�����������������������ĸ��ڵ�����ӽڵ㣬��ô������ָ�򸸽ڵ��ָ��һֱ���ϱ�����ֱ���ҵ�һ���������ڵ�����ӽڵ�Ľڵ㡣�����ڣ���������㣬�������ڣ��򷵻�null
*/

function getNext(node) {
    if(!node) {
        return null;
    }
    
    let left = node.left;
    let right = node.right;
    let next = node.next;
    let result = {};
    
    
    if(right) {
        while(right.left) {
            right = right.left;
        }
        result = right;
    } else if(next) {
        let currentNode = node;
        //����Ѱ��
        while(next && next.right === currentNode) {
            currentNode = next;
            next = next.next;
        }
        result = next;
    } else {
        result = null;
    }
    return result;
} 