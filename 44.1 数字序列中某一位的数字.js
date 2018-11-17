/**
��Ŀ��
������0123456789101112...�ĸ�ʽ���л���һ���ַ������С�����������У���5λ����0��ʼ��������5��
��13λ��1����19λ��4���ȵȡ�
дһ���������������nλ��Ӧ������
*/

/**
˼·��ö��
ö��ʱ������ÿ�����ֵ�λ����Ȼ�����
*/
function digitAtIndex(index) {
    let count = 0;
    for(let i=0; ; ++i) {
        count += getCountOfNum(i);
        if(count === index) {
            return i % 10;
        } else if(count > index) {
            let dis = count - index;
            return getBackNth(i, dis + 1);
        }
    }
}

function getBackNth(num, n) {
    let result = 0;
    while(n) {
        result = (num % 10);
        num = Math.floor(num / 10);
        --n;
    }
    return result;
}

function getCountOfNum(num) {
    let count = 0;
    while(num) {
        ++count;
        num = Math.floor(num / 10);
    }
    return count;
}

console.log(digitAtIndex(13))