/*
��Ŀ��
��쳲��������еĵ�n��
Ҫ��
дһ������������n����쳲������������еĵ�n�
*/

//��Ϊ�ݹ��Ż�
function fib(n) {
    if(n <= 0) return 0;
    if(n === 1) return 1;
    
    return fib(n - 1) + fib(n - 2);
}

//β�ݹ��Ż���ֵ���ú���������������������
function fib2(n, pre = 0, current = 1) {
    if(n <= 0) return pre;
    if(n === 1) return current;
    
    //pre = current;
    //current = pre + current;
    
    return fib2(n - 1, current, pre + current);
}

//�ǵݹ�ʵ��
function fib3(n) {
    if(n <= 0) return 0;
    if(n === 1) return 1;
    
    let pre = 0,
        current = 1,
        temp = 0,//��ʱ��������preֵ����Ȼ�ᱻ����
        i = 2;
    while(i <= n) {
        temp = pre;
        pre = current;
        current = temp + current;
        ++i;
    }
    return current;
}

console.log(fib3(10))