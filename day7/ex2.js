'use strict';

/* 
    < 이메일 주소와 개인 전화번호를 이용한 비밀번호 생성 >

step1 : 이메일 주소의 "@" 직전의 두 글자.                           =>      58
step2 : 이메일 주소의 "." 직전까지의 전체 문자열 크기.               =>      15
step3 : 개인 전화번호의 두 번째 "-" 문자 이후 두 개 숫자.            =>      56

password : 이메일 주소의 두 번째와 세 번째 문자 + step1 + step2 + step3

※ 단, 이메일 주소의 두 번째 문자가 문자형태이면 그 값 그대로를
   결합하고 숫자타입이면 "@" 문자 다음의 첫 글자를 이용하여 결합.

< 예시 >

psy7758@hanmail.net     =>      sy581556

k1234@naver.com         =>      n2341156

*/

let email1, phone1;
let step1, step2, step3, password;

email1 = 'y123@naver.com';
phone1 = '010-1234-5678';

step1 = email1.split('@')[0].slice(-2);
console.log(step1);

step2 = email1.indexOf('.');
// step2 = email1.split('.')[0].length;
console.log(step2);

step3 = phone1.split('-')[2].slice(0, 2);
console.log(step3);

// if (isNaN(email1[1])) {
//     password = email1.slice(1,2)
// } else {
//     password = email1.split('@')[1].slice(0,1)
// }

password = `${isNaN(email1[1]) ? email1.slice(1, 3) : email1.split('@')[1][0] + email1[2]}${step1 + step2 + step3}`
console.log(password);

// console.log(password + email1.slice(2,3) + step1 + step2 + step3);



