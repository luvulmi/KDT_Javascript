'use strict';

let email = 'yulmi123@daum.net'

// daum.net > naver.com 변경

console.log(email.replace(email.slice(email.indexOf('@')+1),'naver.com'));
// @ 다음 문자열을 바꿔주어야 하므로 +1 해주어야함.
// slice(number) : 괄호안의 값 > 숫자가 들어감 !