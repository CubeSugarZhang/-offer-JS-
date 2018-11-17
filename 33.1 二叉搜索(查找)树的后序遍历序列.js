/*
��Ŀ��
����һ���������飬�жϸ������ǲ���ĳ�����������ĺ�����������������򷵻�true�����򷵻�false��
�������������������������ֶ�������ͬ��
*/


/**
��һ������
���Ҫ����һ�Ŷ������ı������У���������ҵ��������ĸ��ڵ㣬
�ڻ��ڸ��ڵ���������ı������в�ֳ�����������������Ӧ�������У�
�������ٵݹ�Ĵ��������������С�
*/


/*
�ں�������õ��������У����һ�����������ĸ��ڵ��ֵ��������ǰ������ַ�Ϊ�����֣�
��һ�������������ڵ��ֵ�����Ƕ��ȸ��ڵ��ֵС��
�ڶ��������������ڵ��ֵ�����Ƕ��ȸ��ڵ��ֵ��
��ֺ�����ڵڶ����ֳ����˱ȸ��ڵ��ֵС�Ľڵ㣬˵�����Ƕ�����������
���������֡�
*/
function verifySequenceOfBST(arr) {
    if(arr.length <= 0) {
        return false;
    }
    
    let len = arr.length;
    let root = arr[len - 1];
    
    //�ڶ������������������ڵ��ֵС�ڸ��ڵ��ֵ
    let index = 0;//���Ƿֽ�㣬�ڶ����ֵĵ�һ���ڵ�λ��
    for(; index < len - 1; ++index) {
        if(arr[index] > root) {
            break;
        }
    }
    
    //�ڶ����������У��������Ľڵ��ֵ���ڸ��ڵ��ֵ
    let j = index;
    for(; j < len - 1; ++j) {
        if(arr[j] < root) {
            return false;
        }
    }
    
    //Ȼ���ж����������ǲ��Ƕ���������
    let left = true;
    if(index > 0) {
        left = verifySequenceOfBST(arr.slice(0, index));
    }
    
    //�ж��������ǲ��Ƕ���������
    let right = true;
    if(index < len - 1) {
        right = verifySequenceOfBST(arr.slice(index, len - 1));
    }
    
    return left && right;
}

console.log(verifySequenceOfBST(5,7,6,9,11,10,8))