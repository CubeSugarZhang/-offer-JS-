/**
��Ŀ��
��һ��m*n�����̵�ÿһ�񶼷���һ�����ÿ�����ﶼ��һ���ļ�ֵ����ֵ����0����
����Դ����̵����Ͻǿ�ʼ�ø�����������ÿ�����һ��������ƶ�һ��ֱ���������̵����½ǡ�
Ҫ��
����һ�����̼������������������������õ����ټ�ֵ�����
*/

/**
��ʵ���Ǳ�������ı��Σ�Ҳ�ǲ��ö�̬�滮�ķ�ʽ��
����f(i,j)��ʾ�����꣨i,j��������֮�͵����ֵ��
��ô�����ֻ�ܴ��������ϲ�����ģ�����ֻ��Ҫ�ж�max[f(i-1, j), f(i, j-1)]��
��f(i, j) = value(i, j) + max[f(i-1, j), f(i, j-1)];
*/
//��Ŀ����m*n���������������������ʹ��
function getMaxValue(valueMatrix, m, n) {
    //Ҳ����ʹ�ö�ά���鱣�棬��һ���ģ�ֻ���ڴ��ַ�ϵ�����
    let help = new Array(m*n);
    for(let row = 0; row < m; ++row) {
        for(let col = 0; col < n; ++col) {
            let left = 0,
                top = 0;
            if(row > 0) {
                top = help[(row - 1) * m + col];
            }
            
            if(col > 0) {
                left = help[row * m + col - 1];
            }
            help[row * m + col] = valueMatrix[row][col] + Math.max(left, top);
        }
    }
    console.log(help);
    return help[m*n - 1];
}

let value = [
    [1, 10, 3, 8],
    [12, 2, 9, 6],
    [5, 7, 4, 11],
    [3, 7, 16, 5]
];

console.log(getMaxValue(value, 4, 4));