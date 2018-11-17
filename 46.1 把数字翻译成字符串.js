/**
��Ŀ��
����һ�����֣����ǰ������¹����������Ϊ�ַ�����0����ɡ�a����1����ɡ�b��...25����ɡ�z����
һ�����ֿ����ж�����롣���磬12258��5�ֲ�ͬ�ķ��룬�ֱ��ǡ�bccfi������bwfi������bczi������mcfi���͡�mzi����
Ҫ��
����ʵ��һ����������������һ�������ж����ֲ�ͬ�ķ��뷽����
*/

/**
��̬�滮
����f(i)Ϊ����Ϊi�����ֵĲ�ͬ���뷽����
���i-1λ�ϵ����ֿ��Ժ�i���25���µ����֣���ôf(i) = f(i-1) + f(i-2);������ܣ���f(i) = f(i-1);
*/
function getTranslationCount(num) {
    let str = num.toString(10);
    let len = str.length;
    if(len <= 1) {
        return 1;
    }
    let help = [1];
    for(let i=1; i<len; ++i) {
        let temp = Number(str[i - 1]+str[i]);
        if(temp <= 25 && temp >= 10) {
            if(i === 1) {
                help[i] = help[i-1] + 1;
            } else {
                help[i] = help[i-1] + help[i-2];
            }   
        } else {
            help[i] = help[i-1];
        }
    }
    return help[len - 1];
}


//�ݹ��ʵ��
function recursive(str, index) {
    if(index <= 0) {
        return 1;
    }
    let temp = Number(str[index - 1] + str[index]);
    console.log(temp);
    if(temp <= 25 && temp >= 10) {
        return recursive(str, index - 1) + recursive(str, index - 2);
    } else {
        return recursive(str, index - 1);
    }
}

function getTranslationCount2(num) {
    let str = num.toString(10),
        index = str.length - 1;
    return recursive(str, index);
}