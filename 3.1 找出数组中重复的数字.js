//�����ⷨ
function findDuplicate(arr) {
    for(let i=0, len= arr.length; i<len; ++i) {
        for(let j=i+1; j<len; ++j) {
            if(arr[i] === arr[j]) {
                return arr[i];
            }
        } 
    }
    return false;
}

//����������Ȼ�����жϣ��ͱ������
function findDuplicate(arr) {
    arr.sort((a, b) => a - b);
    for(let i=0, len= arr.length; i<len; ++i) {
        if(arr[i] === arr[i+1]) {
            return arr[i];
        }
    }
    return false;
}

//���û���ظ�,��ôi��Ӧ���������±�i��Ӧ��Ԫ�����棬��Ϊ���ظ������Աض���ͬһλ�ö��ֵ�����Ӷ�O(n)
function findDuplicate(arr) {
    for(let i=0, len=arr.length; i<len; ++i) {
        while(arr[i] != i) {
            if(arr[arr[i]] === arr[i]) {
                return arr[i];
            } else {
                //����arr[i]��arr[arr[i]]��ֵ
                let temp = arr[i];
                arr[i] = arr[temp];
                arr[temp] = temp;
            }
        }
    }
    return false;
}

console.log(findDuplicate([2,3,1,0,2,5,3]));