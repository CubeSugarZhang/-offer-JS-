/*
��Ŀ��
����һ������Ϊn�����ӣ�������Ӽ���m��(m��n����������n>1����m>1)
Ҫ��
ÿ�����ӵĳ��ȵ����˻��Ƕ��٣�
*/

/*
��̬�滮��
��ǰ�����Ž⣬���Դ�֮ǰ�����Ž����ҵ���
����f(n)��ʾ����Ϊn�����ӵ�ÿ�����ӵ����˻���f(n)=max(f(n-i)*i),iȡֵ��Χ��1~n-1
*/
function maxProductAfterCutting(n) {
    if(n <= 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    if(n === 3) return 3;
    
    let maxProduct = [0,1,2,3],
        max = 0;
        
    for(let i=4; i <= n; ++i) {
        max = 0;//ÿ�����¼������ֵ����Ȼ���ֵ�϶������ӣ���������Ҫ����
        for(let j=1; j<i; ++j) {
            if(maxProduct[i-j]*j > max) {
                max = maxProduct[i-j]*j;
            }
        }
        maxProduct[i] = max;
    }
    
    return maxProduct.pop();
}


/*
̰���㷨��
��Ϊ�����ҳ����ɣ������ӳ��ȴ��ڵ���5ʱ�������������Ϊ3�����ӣ���ʣ�����ӵĳ���Ϊ4ʱ�������Ӽ������˳���Ϊ2������
*/
function maxProductAfterCutting(n) {
    let count = Math.floor(n / 3),
        remain = n % 3,
        max = 0;
        
    if(remain === 1) {
        max = Math.pow(3, count - 1) * 4;
    } else if(remain === 2){
        max = Math.pow(3, count) * 2;
    } else {
        max = Math.pow(3, count);
    }
    return max;
}
console.log(maxProductAfterCutting(10));