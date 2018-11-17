/**
��Ŀ��
������һ��m��n�еķ���һ�������˴�����(0,0)�ĸ��ӿ�ʼ�ƶ�����ÿ�ο��������ҡ��ϡ����ƶ�һ��
�����ܽ�������������������λ֮�ʹ���K�ĸ��ӡ�
���磺
��kΪ18ʱ���������ܹ����뷽��(35, 37)����Ϊ3+5+3+7 = 18�������ܽ��뷽��(35, 38),��Ϊ3+5+3+8=19��
Ҫ��
���ʸû������ܹ�������ٸ����ӣ�
*/

/*
˼·��
�����˴�����(0,0)��ʼ�ƶ�������׼����������Ϊ(i, j)�ĸ���ʱ��ͨ������������λ�����жϻ������ǹ��ܹ����롣
����������ܹ���������Ϊ(i, j)�ĸ��ӣ������ж����ܷ����4�����ڵĸ���(i, j-1)��(i-1, j)��(i, j+1)��(i+1, j)
*/
function movingCount(threshold, rows, cols)
{
    // write code here
    if(rows<1 || cols<1 || threshold <0) {
        return 0;
    }

    let visitedFlag = new Array(rows*cols).fill(false);

    return movingCountCore(threshold, rows, cols, 0, 0, visitedFlag);
}

/**
 * ��������㷨
 * @param threshold ��ֵ
 * @param rows ���������
 * @param cols ���������
 * @param row ��ǰ������ӵ���
 * @param col ��ǰ������ӵ���
 * @param visitedFlag ��Ǿ������ڱ�Ǹ����Ƿ���ʹ�
 * */
function movingCountCore(threshold, rows, cols, row, col, visitedFlag) {
    let count = 0;
    if(check(threshold, rows, cols, row, col, visitedFlag)){
        visitedFlag[row*cols+col] = true;
        count = 1 + movingCountCore(threshold,rows,cols,row-1,col,visitedFlag)
            + movingCountCore(threshold,rows,cols,row,col-1,visitedFlag)
            + movingCountCore(threshold,rows,cols,row+1,col,visitedFlag)
            + movingCountCore(threshold,rows,cols,row,col+1,visitedFlag);
    }
    return count;
}

//�ж�(row,col)�����Ƿ��ܽ���
function check(threshold, rows, cols, row, col, visitedFlag) {
    if(row>=0 && row<rows && col>=0 && col<cols && getDigitSum(row)+getDigitSum(col)<=threshold && !visitedFlag[row*cols+col]){
        return true;
    }
    return false;
}

//��ȡ���ֵ���λ֮��
function getDigitSum(num) {
    let sum = 0;
    while(num > 0){
        sum += (num % 10);
        num = Math.floor(num/10);
    }
    return sum;
}


console.log(movingCount(18, 50, 50));