/*
��Ŀ��
�����һ�������������ж���һ���������Ƿ����һ������ĳ�ַ��������ַ���·����
Ҫ��
·�����ԴӾ����е�����һ��ʼ��ÿһ�������ھ����������ҡ��ϡ����ƶ�һ��
���һ��·�������˾����ĳһ����ô��·�������ٴν���ø��ӡ�
*/

//ʹ�û��ݷ���������ܲ��Ƿ��󣬶���������Ϊ�������飬���������Ҫ�Լ�ת��
function isHasPath(matrix, rows, cols, path) {      
    if(rows === 0 || cols === 0) return false;
    //���츨�����������жϵ�ǰ�����ǹ��ﵽ����0Ϊδ�ﵽ��1Ϊ����
    let vistiedMatrix = [];
    for(let i=0; i<rows; ++i) {
        vistiedMatrix[i] = new Array(cols).fill(false);
    }
    
    //�Բ�ͬ�ĸ�����Ϊ���
    for(let i=0; i< rows; ++i) {
        for(let j=0; j<cols; ++j) {
            if(matrix[i][j] === path[0]) {
                if(path.length === 1) return true;
                vistiedMatrix[i][j] = true;
                if(isMatch(matrix, rows, cols, i, j, path.slice(1), vistiedMatrix)) {
                    return true;
                }
                vistiedMatrix[i][j] = false;
            }
        }
    }
    return false;
}

/*
˼·��
������������Ϊ(row,col)�ĸ��Ӻ�·���ַ������±�ΪpathLength���ַ�һ��ʱ��
��4�����ڵĸ���(row, col-1)��(row-1, col)��(row, col+1)��(row+1,col)��ȥѰ��·���ַ������±�ΪpathLength+1���ַ���
�����û��ƥ��,��ʾ��ǰ·�����ԣ��ص���һ���ַ�������Ѱ��
*/

//�����ж��Ƿ�ƥ���ַ�
function isMatch(matrix, rows, cols, row, col, path, vistiedMatrix) {
    if(path.length === 1) return true;
    
    //�ϱ�Ѱ��
    if(row > 0 && matrix[row - 1][col] === path[0] && !vistiedMatrix[row - 1][col]) {
        vistiedMatrix[row - 1][col] = true;
        if(isMatch(matrix, row, cols, row - 1, col, path.slice(1), vistiedMatrix)) {
            return true;
        }
        vistiedMatrix[row - 1][col] = false;
    }
    
    //�±�Ѱ��
    if(row < rows - 1 && matrix[row + 1][col] === path[0] && !vistiedMatrix[row + 1][col]) {
        vistiedMatrix[row + 1][col] = true;
        if(isMatch(matrix, row, cols, row + 1, col, path.slice(1), vistiedMatrix)) {
            return true;
        }
        vistiedMatrix[row + 1][col] = false;
    }
    
    //���Ѱ��
    if(col > 0 && matrix[row][col - 1] === path[0] && !vistiedMatrix[row][col - 1]) {
        vistiedMatrix[row][col - 1] = true;
        if(isMatch(matrix, row, cols, row, col - 1, path.slice(1), vistiedMatrix)) {
            return true;
        }
        vistiedMatrix[row][col - 1] = false;
    }
    
    //�ұ�Ѱ��
    if(col < cols - 1 && matrix[row][col + 1] === path[0] && !vistiedMatrix[row][col + 1]) {
        vistiedMatrix[row][col + 1] = true;
        if(isMatch(matrix, row, cols, row , col + 1, path.slice(1), vistiedMatrix)) {
            return true;
        }
        vistiedMatrix[row][col + 1] = false;
    }
    return false;
}



/*��ָoffer�ϵĴ���*/
function isHasPath(matrix, rows, cols, path) {      
    if(rows === 0 || cols === 0) return false;
    //���츨�����������жϵ�ǰ�����ǹ��ﵽ����0Ϊδ�ﵽ��1Ϊ����
    let vistiedMatrix = [];
    for(let i=0; i<rows; ++i) {
        vistiedMatrix[i] = new Array(cols).fill(false);
    }
    
    //�Բ�ͬ�ĸ�����Ϊ���
    for(let i=0; i< rows; ++i) {
        for(let j=0; j<cols; ++j) {
            if(matrix[i][j] === path[0]) {
                if(isMatch(matrix, rows, cols, i, j, path, 0, vistiedMatrix)) {
                    return true;
                }
            }
        }
    }
    //vistiedMatrix = null;
    return false;
}

/*
˼·��
������������Ϊ(row,col)�ĸ��Ӻ�·���ַ������±�ΪpathLength���ַ�һ��ʱ��
��4�����ڵĸ���(row, col-1)��(row-1, col)��(row, col+1)��(row+1,col)��ȥѰ��·���ַ������±�ΪpathLength+1���ַ���
�����û��ƥ�䣬��ʾ��ǰ·�����ԣ��ص���һ���ַ�������Ѱ��
*/

//�����ж��Ƿ�ƥ���ַ�
function isMatch(matrix, rows, cols, row, col, path, pathLength, vistiedMatrix) {
    if(path.length === pathLength) return true;
    
    let hasPath = false;
    //��ǰ���Ӻ��ַ���ƥ�䣬��ô��ȥѰ����������ƥ��񣬲�ƥ��ͻ��ˣ�ƥ��ͼ���
    if(row >= 0 && row < rows && col >= 0 && col < cols && matrix[row][col] === path[pathLength] && !vistiedMatrix[row][col]) {
        ++pathLength;
        vistiedMatrix[row][col] = true;
        hasPath = isMatch(matrix, rows, cols, row, col - 1, path, pathLength, vistiedMatrix)
                || isMatch(matrix, rows, cols, row - 1, col, path, pathLength, vistiedMatrix)
                || isMatch(matrix, rows, cols, row + 1, col, path, pathLength, vistiedMatrix)
                || isMatch(matrix, rows, cols, row, col + 1, path, pathLength, vistiedMatrix);
    
        if(!hasPath) {
            --pathLength;
            vistiedMatrix[row][col] = false;
        }
    }
    
    return hasPath;
}

let matrix = [
    ['a', 'b', 't', 'g'],
    ['c', 'f', 'c', 's'],
    ['j', 'd', 'e', 'h']
]

console.log(isHasPath(matrix, 3, 4, 'bfce'));