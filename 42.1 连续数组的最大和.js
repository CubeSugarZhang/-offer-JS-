/**
��Ŀ��
����һ���������飬����������������Ҳ�и����������е�һ������������������һ�������顣
������������ĺ͵����ֵ��Ҫ��ʱ�临�Ӷ�ΪO(n)
*/


/**
˼·һ������ö�٣�һ��һ�����������
*/
function subArray(array){
    let max = array[0],
        start = 0,
        end = 0;
    for(let i=0,len=array.length; i<len; i++) {
        let sum = 0;
        for(let j=i; j<len; j++) {
            sum += array[j];
            if(sum > max) {
                max = sum;
                start = i;
                end = j;
            }
        }
    }
    //return max;
    return array.slice(start, end+1);
}

/**
˼·����
ǰ���ۼӺͼ��ϵ�ǰֵ�������ȵ�ǰֵ��С��˵��ǰ����ۼ�ֵ�����統ǰֵ��ʼ��
��ô�����¼������������ʼλ�ã�Ȼ���ظ�֮ǰ�Ĳ���
*/
function findSubArray(arr) {
    if(arr.length < 1) {
        return 0;
    }
    let max = arr[0],
        sum = arr[0],
        start = 0,
        end = 0;
    for(let i=1, len=arr.length; i<len; ++i) {
        sum += arr[i];
        if(sum < arr[i]) {
            sum = arr[i];
        }
        if(sum > max) {
            max = sum;
        }
    }
    return max;
}

/**
˼·������̬�滮
*/
function subArray(array) {
    let arr = [],
        start = 0,
        end = 0;
    for(let i=0,len=array.length; i<len; i++) {
        if(i === 0 || arr[i-1] <= 0) {
            arr.push(array[i]);
        } else {
            arr.push(arr[i - 1] + array[i]);
        }
    }
    return arr.sort((a, b)=>a-b).pop();
}


console.log(findSubArray([6,-3,-2,7,-15,1,2,2]));