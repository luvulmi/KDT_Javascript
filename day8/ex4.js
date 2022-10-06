/*
    < 문제 >

- 학생명, 국어점수, 영어점수, 수학점수를 입력받아 테이블 형태로
  입력받은 정보와 성적 합계, 평균이 출력되도록 프로그램 구현.


    < 조건 >

1> 외부 스타일 시트와 외부 스크립트 적용.
2> 국어점수, 영어점수, 수학점수는 0 ~ 100점 사이의 범위로 입력 받는다 가정.
   단, 과목은 국, 영, 수 외에 더 확장이 될 수 있다는 가정하에 구현.
3> 평균은 정수부만 표현되도록 Math.trunc() 함수 활용.
4> 테이블의 제목은 caption 속성을 적용하고 테이블의 구성은 tr, th, td 로만 구성.
5> 테이블 제목과 모든 행의 높이는 30px 적용.
6> 테이블의 개별 열 너비는 각각 100px 적용.
7> 그 외 사항은 출력 예시 참조.
8> 모두 html 태그 구성은 js 를 이용하여 구성.

*/

// const rowCnt = 5;
// const columnCnt = 2;

// document.write('<table border="1">');
// for (let i = 0; i < rowCnt; i++) {
//   document.write('<tr>');
//   for (let j = 0; j < columnCnt; j++)  {
//     document.write('<td>');
//     document.write(`점수` );
//     document.write('</td>');
//   }
//   document.write('</tr>')
// }
// document.write('</table>');


const sub = ['국어점수', '영어점수', '수학점수'];
const subject = new Array(3);
let sum = 0;

let id = prompt('학생명:');
for (let i = 0; i < subject.length; i++) {
    subject[i] = +prompt(`${sub[i]}`);
    sum += +subject[i];
}

document.write('<table>');
document.write(`<caption> &lsaquo; ${id} 학생의 성적 &rsaquo; </caption>`);
for (let i = 0; i < sub.length; i++) {
    document.write(`<tr>`);
    document.write(`<th>${sub[i]}</th>`);
    document.write(`<td>${subject[i]} 점</td>`);
    document.write(`</tr>`);
}



// for (let i = 0; i < 2; i++) {
//     document.write(`<tr>`);
//     if (i === 0) {
//         document.write(`<th>${sub.slice(-2)[i]}</th>`);
//         document.write(`<td>${sum} 점</td>`);
//     } else {
//         document.write(`<th>${sub.slice(-2)[i]}</th>`);
//         document.write(`<td>${Math.trunc(sum / subject.length)} 점</td>`);
//     }
//     document.write(`</tr>`)
// }
document.write('</table>');




