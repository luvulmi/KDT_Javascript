/*
    < 내장(Built-in) 함수 >

형식   :   [window.]함수명();

----------------------------------------------------------------------------

    < prompt > - 브라우저 입력 대화상자 창 활성화.

형식    :    prompt( message? : string , default? : string ) : string                   - ? : 생략 가능함을 의미.

message : 입력 대화상자에 표시할 문자열 메시지 지정.
default : 입력 대화상자 입력란에 기본적으로 입력되어질 문자열 지정.

- 미 입력후 확인 버튼을 누르면 빈 문자열('') 반환.
- 취소 버튼을 누르면 null값 반환.

----------------------------------------------------------------------------

    < alert > - 브라우저 경고 대화상자 창 활성화.

형식    :    alert( message? : any ) : void

*/
'use strict';

let input;
// js의 변수 선언

input = prompt();
alert(input);

// prompt 위에 마우스 올리면 함수 설명이 나옴 위 설명을 읽는 법을 잘 연습해야함
// ?가 붙어 있으면 생략 가능

input = prompt('입력');
alert(input);

// 입력이라는 내용이 출력

input = prompt('입력', '기본데이터');
alert(input);

// 두번째로 사용된 데이터는 css <input> - placeholder 속성과 비슷하게 기본값으로 입력되어 있음.
