'use strict';

function test1(n1, n2, n3 = 5){
    return n1 + n2 + n3;
}
console.log(test1(1,2,3));
console.log(test1(1,2));
console.log();

function test2(str1, str2, str3 = str1 + str2){
    return str1 + str2 + str3;
}
console.log('welcome','to house','KYR');
console.log('welcome','to house');
console.log();

function concateString(...str) {            // Rest parameters : 전달한 실인수들을 배열 형태로 받아 참조를 반환.
    let strCombine = '';

    for (let i = 0; i < str.length; i++) {
        strCombine += str[i];
    }

    return strCombine;
}
console.log(concateString('I', 'am ', 'a boy!!'));
console.log();


function concateData(...data){           // 실인수의 타입이 달라도 무방.
    let datacombine ='';

    for (let i = 0; i < data.length; i++){
        datacombine += data[i];
    }

    return datacombine;
}
console.log(concateData('age: ',25));

function printName(name){

    function print() {            // 로컬 이너 함수 : 함수(외부 함수) 내부에 종속적인 지역 함수의 정의가 가능하며
        console.log(str + name);    // 지역변수의 특성이 그대로 적용되어 외부에서는 접근 불가.     따라서 로컬 이너
    }                             // 함수의 호출 호이스팅 범위는 주 함수 내로 제한.
    let str = '이름 : ';

    print();
}
printName('김유림');

function func(n1, n2, ...rest) {
    console.log(n1, n2);
    console.log(rest);
    console.log(arguments);
    // console.log(n1, n2, 숫자);
    // console.log(Array.isArray(numbers), numbers);
  }
  
  func(1,2,3,4,5,6,7,8,9);