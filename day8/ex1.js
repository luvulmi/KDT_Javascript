/*
  < 문제 >

- 이름을 입력받아 대화상자 형태로 화면에 이름을 표시하는 프로그램을 구현.
  단, 입력 대화상자가 비어있는 상태로 "확인" 버튼을 누르거나 "취소" 버튼을
  눌렀을 때 "이름이 정상적으로 입력되지 않았습니다!!" 문구와 함께 페이지가
  종료되도록 구현.
*/

'use strict';

let myname = prompt('이름 입력:');
// 취소를 눌렀을 때는 null로 인식.

if (myname) {
    alert(myname);
} else {
    alert('다시 입력해 바보야.');
    close();
}

// alert(myname || '다시 입력해 바보야.');