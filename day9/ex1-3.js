// 이해됨. 근데 그지같음.
'use strict';


const subject = [
    ['학생명', '국어점수', '영어점수', '수학점수', '합계', '평균'],
];

subject[1] = new Array(subject[0].length);
// 입력값 배열 생성 될 때마다 항목명 길이만큼 배열 생성.

subject[1][subject[0].length - 2] = 0;
// 입력값 배열의 합계 값 자리 좌표 = 0으로 초기화. 

for (let i = 0; i < subject[0].length - 2; i++) { // 합계, 평균은 입력받으면 안됨.
    subject[1][i] = prompt(`${subject[0][i]}`); // 학생명 ~ 점수까지 입력 받기 > 입력받은 값은 새로운 배열의 값.
    if (i >= 1) { // 점수끼리의 합계 구하기.
        subject[1][subject[0].length - 2] += +subject[1][i]; // 누적합 개념 이용 > 입력값 배열 합계 값 자리에 초기화.
    }
}

// 입력값 배열의 평균 값 자리 = 평균 구하기.
subject[1][subject[0].length - 1] = Math.trunc(subject[1][subject[0].length - 2] / (subject[0].length - 3));

document.write('<table>');
document.write(`<caption> &lt; ${subject[1][0]} 학생의 성적 &gt; </caption>`);
for (let i = 1; i < subject[0].length; i++) {
    document.write('<tr>');
    document.write(`<th scope="col">${subject[0][i]}</th>`);
    document.write(`<td>${subject[1][i]} 점</td>`);
    document.write('</tr>');
}
document.write('</table>');

