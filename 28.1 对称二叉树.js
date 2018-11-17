/*
��Ŀ��
��ʵ��һ�������������ж�һ���������ǲ��ǶԳƵġ����һ�������������ľ���һ������ô�����ǶԳƵġ�
*/
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

//�ж���ֵ�Ƿ����
function isEqual(num1, num2) {
    return Math.abs(num1 - num2) < Number.EPSILON;
}


//��ָoffer�ϵĽⷨ������ǰ���������ǰ������ж��Ƿ����
function isSymmetrical(root) {
    return isSymmetricalCore(root, root);
}

function isSymmetricalCore(root1, root2) {
    if(!root1 && !root2) {
        return true;
    }
    //����ֱ��ʹ��else����Ȼ���벻�����������
    if(!root1 || !root2){
        return false;
    }
    if(!isEqual(root1.val, root2.val)) {
        return false;
    }
    return isSymmetricalCore(root1.left, root2.right) && isSymmetricalCore(root1.right, root2.left);
}


/*
�����Ҫʹ�ö����������У��Ǹ������¶������ķ���
�����Լ��ķ��������ؿ�����ͨ��ţ�����ܲ�ͨ
*/
/*
function isSymmetrical(root) {
    return isSymmetricalCore(root, mirrorTree(root));
}

//��ȡ������
function mirrorTree(root) {
    if(root === null) {
        return null;
    }
    
    let newTree = new TreeNode(root.val);
    newTree.left = mirrorTree(root.right);
    newTree.right = mirrorTree(root.left);
    return newTree;
}

//�жϸ����뾵�����Ƿ����
function isSymmetricalCore(root1, root2) {
    //������,ʹ��null�жϸ��ã��������0������ͺ�������
    if(!root1 && !root2) {
        return true;
    } else {
        return false;
    }
    
    if(!isEqual(root1.val, root2.val)) {
        return false;
    }
    
    return isSymmetricalCore(root1.left, root2.left) && isSymmetricalCore(root1.right, root2.right);
    /*���Ǵ���汾���ݹ�����д���ˣ�������ѭ����
    //������һ��Ͷ��ˣ���ֹ�������Ƿ��ʽ����ˡ�
    if(root1 === null) {
        return true;
    }
    let result = false;
    if(!isEqual(root1.val, root2.val)) {
        result = false;
    } else {
        result = isSymmetricalCore(root1.left, root2.left) && isSymmetricalCore(root1.right, root2.right);
    }
    return result;
    */
//}

let head = new TreeNode(1),
    left = new TreeNode(2),
    right = new TreeNode(2);
    left1 = new TreeNode(3),
    right1 = new TreeNode(3);
    head.left = left;
    head.right = right;
    left.left = left1;
    right.right = right1;
console.log(isSymmetrical(head));