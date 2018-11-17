/**
��Ŀ��
��ʵ��һ����������ƥ�������.���͡�*����������ʽ��ģʽ�е��ַ���.����ʾ����һ���ַ�������*����ʾ��ǰ����ַ���������Σ���0�Σ���
Ҫ��
�ڱ����У�ƥ����ָ�ַ����������ַ�ƥ������ģʽ�����磬�ַ�����aaa����ģʽ��a.a���͡�ab*ac*a��ƥ�䣬���롰aa.a���͡�ab*a������ƥ�䡣
*/

/*
��������Ҫ��������ϸ�о���������������˺ö�β����׵ġ�
���ȣ��������������
     1>�����ַ�����Ϊ�գ�����true
     2>����һ���ַ������գ����ڶ����ַ������ˣ�����false����Ϊ���������޷�
        ƥ��ɹ���,�������һ���ַ������ˣ��ڶ����ַ����ǿգ����ǿ���ƥ���
        ���ģ�����ڶ����ַ����ǡ�a*a*a*a*��,���ڡ�*��֮ǰ��Ԫ�ؿ��Գ���0�Σ�
        �����п���ƥ��ɹ���
֮��Ϳ�ʼƥ���һ���ַ������������ֿ��ܣ�ƥ��ɹ���ƥ��ʧ�ܡ������ǵ�pattern
��һ���ַ������ǡ�*���� �������Ƿ�����������ۣ�pattern��һ���ַ�Ϊ��*����
��Ϊ��*����
      1>pattern��һ���ַ���Ϊ��*������������Ƚϼ򵥣�ֱ��ƥ�䵱ǰ�ַ������
        ƥ��ɹ�������ƥ����һ�������ƥ��ʧ�ܣ�ֱ�ӷ���false��ע�������
        ��ƥ��ɹ��������������ַ���ͬ������⣬����һ�����������pattern��
        ��ǰ�ַ�Ϊ��.��,ͬʱstr�ĵ�ǰ�ַ���Ϊ��\0����
      2>pattern��һ���ַ�Ϊ��*��ʱ����΢����һЩ����Ϊ��*�����Դ���0��������
        �������Щ��������ǵ���
           a>����*��ƥ��0���ַ�ʱ��str��ǰ�ַ����䣬pattern��ǰ�ַ�������λ��
            ���������*�����ţ�
           b>����*��ƥ��1������ʱ��str��ǰ�ַ�������һ����pattern��ǰ�ַ�
            ���䡣������ƥ��1���������Կ���һ���������Ϊ����ƥ��һ��ʱ��
            ����str�Ƶ�����һ���ַ�����pattern�ַ����䣬�ͻص����ϱߵ����a��
            ��ƥ�����һ���ַ�ʱ���൱�ڴ�str����һ���ַ�������ʼƥ�䣩
֮����д����ͺܼ��ˡ�
*/


function isMatch(str, pattern) {
    if(str === undefined || pattern === undefined) {
        return false;
    }
    return matchCore(str, pattern, 0, 0);
}

function matchCore(str, pattern, strPos, patternPos) {
    if(str.length === strPos && pattern.length === patternPos) {
        return true;
    }
    if(str.length !== strPos && pattern.length === patternPos) {
        return false;
    }
    if(pattern[patternPos + 1] === '*') {
        if(pattern[patternPos] === str[strPos] || (pattern[patternPos] === "." && strPos !== str.length)) {
            //ƥ��һλ
            return matchCore(str, pattern, strPos + 1, patternPos + 2)
            //��������ƥ��
                || matchCore(str, pattern, strPos + 1, patternPos)
            //����
                || matchCore(str, pattern, strPos, patternPos + 2);
        } else {
            //ǰ��һ���ַ���ͬ,����
            return matchCore(str, pattern, strPos, patternPos + 2);
        }
    }
    if (str[strPos] === pattern[patternPos] || (pattern[patternPos] === '.' && strPos !== str.length)) {
        //ƥ��һ��
        return matchCore(str, pattern, strPos + 1, patternPos + 1);
    } 
    return false;
}
console.log(isMatch('',''));
console.log(isMatch('aaa','ab*ab*a'));