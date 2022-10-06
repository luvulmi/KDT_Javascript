/*
  < 문제 >

- 학생명과 국어, 영어, 수학 점수를 순서대로 입력받아 평균을 구하여 출력하는 프로그램 구현.
  단, 순서대로 정보를 입력받는 과정에서 어느 하나라도 값이 입력되지 않는 경우에는 다음 입력
  과정으로의 진행을 멈추고 "학생 정보가 순서대로 정확히 입력되지 않았습니다." 문구를 대화상자
  형태로 표시하고 프로그램이 종료되도록 구현.
*/

'use strict';

let stName, kor, eng, math;

stName = prompt('학생명:');
if (stName) {
  kor = prompt('국어:');
  if (kor) {
    eng = prompt('영어:');
    if (eng) {
      math = prompt('수학:');
      if (math) {
        alert(`${stName} 학생의 국어, 영어, 수학 점수의 평균 : ${(+kor + +eng + +math) / 3}`);
      }
    }
  }
}
if (!math) { // 마지막 입력값만 논리값 판별!!!
  alert('학생 정보가 순서대로 정확히 입력되지 않았습니다.');
}

// 가독성이 매우 떨어지나 출력은 동일.
(stName = prompt('학생명:'))
  && (kor = prompt('국어:'))
  && (eng = prompt('영어:'))
  && (math = prompt('수학:'))
  alert(`${stName} 학생의 국어, 영어, 수학 점수의 평균 : ${(+kor + +eng + +math) / 3}`);

math || alert('학생 정보가 순서대로 정확히 입력되지 않았습니다.')
