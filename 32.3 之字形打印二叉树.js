/*
��Ŀ��
ʵ��һ����������֮����˳���ӡһ��������������һ�а��մ����ҵ�˳���ӡ���ڶ��а��մ��ҵ����˳���ӡ
�������ڰ��մ����ҵ�˳���ӡ���������Դ�����
*/

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

//˼·����֮ǰ��һ����ȡ�ɵİ취��ż���з�ת����
function print(root) {
    let helpArr = [],
        layer = [],
        result = [],
        curNum = 0,
        nextNum = 0,
        flag = true;//false��ʾż���㣬true��ʾ������
    
    if(root !== null) {
        helpArr.push(root);
        ++curNum;
    }
    
    while(helpArr.length !== 0) {
        let node = helpArr.shift();
        --curNum;
        
        layer.push(node.val);

        if(node.left !== null) {
            helpArr.push(node.left);
            ++nextNum;
        }
        
        if(node.right !== null) {
            helpArr.push(node.right);
            ++nextNum;
        }
        
        if(curNum === 0) {
            if(flag) {
                result.push(layer);
            } else {
                result.push(layer.reverse());
            }
            curNum = nextNum;
            nextNum = 0;
            layer = [];
            flag = !flag;
        }
    }
    return result;
}



//��ָoffer�ķ�����ʹ������ջ
function print(root) {
    let stack = [[],[]];
    let current = 0;
    let next = 1;
    let layer = [];
    let result = [];
    
    stack[current].push(root);
    while(stack[0].length !== 0 || stack[1].length !== 0) {
        let node = stack[current].pop();
        layer.push(node.val);
        
        if(current === 0) {
            if(node.left !== null) {
                stack[next].push(node.left);
            }
            if(node.right !== null) {
                stack[next].push(node.right);
            }
        } else {
            if(node.right !== null) {
                stack[next].push(node.right);
            }
            if(node.left !== null) {
                stack[next].push(node.left);
            }
        }
        
        if(stack[current].length === 0) {
            result.push(layer);
            layer = [];
            current = 1 - current;//��������
            next = 1 - next;
        }
    }
    return result;
}

let left = new TreeNode(2)
let right = new TreeNode(3)
let root = new TreeNode(1)
let left1 = new TreeNode(4)
let right1 = new TreeNode(5)
let left2 = new TreeNode(6)
let right2 = new TreeNode(7)
root.left = left;
root.right = right;
left.left = left1;
left.right = right1;
right.left = left2;
right.right = right2;
console.log(print(root));