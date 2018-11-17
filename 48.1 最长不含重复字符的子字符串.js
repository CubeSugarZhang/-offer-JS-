/*
��Ŀ��
����ַ������ҳ�һ����Ĳ������ظ��ַ����ַ��������������ַ����ĳ��ȡ�
���裺
�ַ�����ֻ����'a'~'z'���ַ���
*/

//��������O(n^3)�ĸ��Ӷȣ�indexOfҲ�Ǹ��Ӷ�O(n)�����������
function findMaxSubstring(str) {
    let len = str.length,
        maxLength = 1,
        maxSubstr = "";
    if(len === 1) {
        return str;
    }

    for(let i=0; i<len-1; i++) {
        for(let j=i+1; j<len; j++) {
            if(str.slice(i,j).indexOf(str[j]) !== -1) {
                break;
            }
            if(maxLength < j-i+1) {
                maxLength = j - 1 + 1;
                maxSubstr = str.slice(i,j+1);
            }
        }
    }
    return maxSubstr;
}


//��̬�滮��ʱ�临�Ӷ�O(n^2)
//f(i)��ʾ��i���ַ���Ϊ��β�Ĳ������ظ��ַ��������ַ����������
//ר����һ������������Ϊ�ظ��ַ������ж�
function findMaxSubstring2(str) {
    let len = str.length,
        maxLengthArr = [1];
    if(len === 1) {
        return str;
    }

    for(let i=1; i<len; i++) {
        let maxLength = maxLengthArr[i-1],
            index = str.slice(i-maxLength, i).indexOf(str[i]);
        maxLengthArr[i] = maxLength - index;
    }

    const max = maxNumOfArray(maxLengthArr),
        index = max.index,
        maxNum = max.maxLen;
    return str.slice(index-maxNum+1, index+1);
}

function maxNumOfArray(arr) {
    //ȡ�ɵķ�ʽ��ʵ����˳����Ҹ���
    let max = arr[0],
        index = 0;
    for(let i=1,len=arr.length;i<len;i++) {
        if(max < arr[i]) {
            max = arr[i];
            index = i;
        }
    }
    return {
        index,
        maxLen: max
    };
    //return arr.sort((a, b) => a-b).pop();
    //return Math.max(...arr);
}

console.log(findMaxSubstring2("arabcacfr"));