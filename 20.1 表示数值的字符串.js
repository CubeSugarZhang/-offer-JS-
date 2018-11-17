/*
��Ŀ��
��ʵ��һ�������������ж��ַ����Ƿ��ʾ��ֵ������������С����
���磺
�ַ�����+100������5e2������-123������3.1415������-1E-16������ʾ��ֵ������12e������1a3.14������1.2.3������+-5����12e+5.4��������
*/



//�ַ�����ʽΪA[.[B]][e|EC]����.B[e|EC]������AΪ��ֵ���������֣�B������С����Ϊ��ֵ��С�����֣�C�����š�e�����ߡ�E��Ϊ��ֵ��ָ�����֡�
//ͬʱС������û����ֵ����������
function isNumeric(s)
{
    //���ж���û��+1��\d*������ֵλ�� \.?С�� \d*ָ��ǰ������С�� �ж��Ƿ���e����E�����
    let reg = /^(\+|-)?\d*\.?\d*((e|E)(\+|-)?\d+|\d*)$/;
    return reg.test(s);
}


//A[.[B]][e|EC]����.B[e|EC],����A��C��������(�����������ţ�Ҳ����û��)����B��һ���޷�������
function isNumeric(str) {
    // ��Ƿ��š�С���㡢e�Ƿ���ֹ�
    let sign = false, decimal = false, hasE = false;
    for (let i = 0, len = str.length; i < len; ++i) {
        if (str[i] === 'e' || str[i] === 'E') {
            if (i === len-1) return false; // e����һ��Ҫ������
            if (hasE) return false;  // ����ͬʱ��������e
            hasE = true;
        } else if (str[i] === '+' || str[i] === '-') {
            // ��һ�γ���+-���ţ��Ҳ������ַ�����ͷ����Ҳ���������e֮��
            if (!sign && i > 0 && str[i-1] !== 'e' && str[i-1] !== 'E') return false;
            // �ڶ��γ���+-���ţ�����������e֮��
            if (sign && str[i-1] !== 'e' && str[i-1] !== 'E') return false;
            sign = true;
        } else if (str[i] === '.') {
          // e���治�ܽ�С���㣬С���㲻�ܳ�������
            if (hasE || decimal) return false;
            decimal = true;
        } else if (str[i] < '0' || str[i] > '9') // ���Ϸ��ַ�
            return false;
    }
    return true;
}