/**
��Ŀ��
������������ж�������������ֵ����ô��λ������������ֵ�����λ���м����ֵ��
������������ж���ż������ֵ����ô��λ������������ֵ����֮���м���������ƽ��ֵ��
*/
let arr = []
function Insert(num)
{
    // write code here
    arr.push(num);
}
function GetMedian(){
	// write code here
    arr.sort((a, b)=>a-b);
    let len = arr.length,
        mid = Math.floor(len / 2);
    if(len % 2) {
        return arr[mid];
    } else {
        return (arr[mid - 1] + arr[mid]) / 2;
    }
}