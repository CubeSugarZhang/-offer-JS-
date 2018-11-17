/*
��Ŀ��
���ϵ��°����ӡ��������ͬһ��Ľڵ㰴�����ҵ�˳���ӡ��ÿһ���ӡ��һ�С�
���磺
8
6 10
5 7 9 11
*/
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/*
����һ���࣬ʹ�ö��С�
����������Ҫһ��������ʾ��ǰ���л�û�д�ӡ�Ľڵ�����
��һ��������ʾ��һ��ڵ����Ŀ
*/
function print(root) {
    let helpQueue = [],
        layer = [],
        result = [],
        curNum = 0,//��ǰ��ڵ�ʣ�����
        nextNum = 0;//��һ��ڵ�ʣ�����
    if(root !== null) {
        helpQueue.push(root);
        ++curNum;
    }
    
    while(helpQueue.length !== 0) {
        let node = helpQueue.shift();
        layer.push(node.val);
        --curNum;
        
        if(node.left !== null) {
            helpQueue.push(node.left);
            ++nextNum;
        }
        
        if(node.right !== null) {
            helpQueue.push(node.right);
            ++nextNum;
        }
        
        if(curNum === 0) {
            curNum = nextNum;
            nextNum = 0;
            result.push(layer);
            layer = [];//����ʹ��splice(0, result.length)
        }
    }
    return result;
}
let left = new TreeNode(2)
let right = new TreeNode(3)
let root = new TreeNode(1)
let left1 = new TreeNode(4)
let right2 = new TreeNode(5)
root.left = left;
root.right = right;
left.left = left1;
left.right = right2;
console.log(print(root));