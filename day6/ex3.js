
'use strict';

// 주민번호 입력
// -포함 되어 있으면
// confirm
// true 일 때 공백 출력
// false일 때 그대로 출력
// -없으면 그냥 출력

let userid = prompt('주민번호 :');

if (userid.includes('-')) {
    if (confirm(`하이픈(-)을 공백으로 변경을 원하십니까?`)) {
        userid = userid.replace('-', ' ');
    }
}
alert(userid);
