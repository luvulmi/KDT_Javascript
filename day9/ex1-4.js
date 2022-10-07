'use strict';

// 2차원 배열 생성(항목 배열)
let st = [
    ['이름', '국어점수', '영어점수', '수학점수', '합계', '평균'],
];

// 1차원 배열 생성 (입력받을 값 배열)
let stnum = +prompt('학생수: ');
for (let i = 1; i <= stnum; i++) {    // 여기서 i = 학생 수 만큼 입력값 배열을 생성하겠다는 의미.
    st[i] = new Array(st[0].length); // 입력값 배열 생성
    st[i][st[i].length - 2] = 0;    // 입력값 배열 합계 초기화
}

// 저장
for (let i = 1; i <= st.length - 1; i++) { // 입력값은 점수부터 저장되어야 하므로 i = 1부터 시작.
    for (let j = 0; j < st[1].length - 2; j++) { // 합계, 평균 값은 입력받으면 안되므로 배열크기 - 2까지.
        st[i][j] = prompt(`${st[0][j]}: `);
        if (j > 0) { // 점수값의 합계 구하기
            st[i][st[i].length - 2] += +st[i][j];
        }
    }
    // 점수값의 평균
    st[i][st[i].length - 1] = Math.trunc(st[i][st[i].length - 2] / (st[i].length - 3));
}

// 출력
for (let i = 1; i <= st.length - 1; i++) { // 학생명은 출력되면 안되므로
    document.write('<table>');
    document.write(`<caption>< ${st[i][0]} 학생의 성적 ></caption>`);
    for (let j = 1; j < st[1].length; j++) {
        document.write(`<tr><th>${st[0][j]}</th>`)
        document.write(`<td>${st[i][j]} 점</td></tr>`)
    }
    document.write('</table>');
}