/**
��Ŀ��
��ʵ�������������ֱ��������л��ͷ����л�������
*/
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


function serialize(root) {
    let arr = [];
    (function func(root, arr) {
        if(root !== null) {
            arr.push(root.val);
            func(root.left, arr);
            func(root.right, arr);
        } else {
            arr.push('$');
        }
    })(root, arr);
    return arr.join(',');
}


function deserialize(str) {
    let arr = str.split(",");
    if(arr.length < 1) {
        return null;
    }

    return (function recursive(arr){
        let temp = null,
            node = arr.shift();
        if(node !== '$') {
            //������ǰ����������������з����л�
            temp = new TreeNode(node);
            //�������Ľڵ�
            temp.left = recursive(arr);
            //�������Ľڵ�
            temp.right = recursive(arr);
        }
        return temp;
    }(arr))
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
console.log(serialize(root));
console.log(deserialize(serialize(root)));