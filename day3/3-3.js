'use strict';

// 중첩루프 특성: 외곽구조 변수값이 고정되어 있는 상태에서 안쪽 구조 변수값이 변하는 특성

// 일의자릿수는 공백을 출력해야 자릿수가 맞음. > 변수 필요

for (let i = 1; i <= 9; i++) {
    for (let j = 1, result; j <= 9; j++) {
        result = i * j //  변수 지정 필요
        document.write(`${i} x ${j} = ${(result/10 < 1? '&nbsp;':'') + result} `);
        // 일의 자릿수 일 때 = 결과값을 10으로 나눈 몫이 1보다 작을 때
        // 공백을 출력해야함
    }
    document.write('<br/>'); // 단이 바뀔 때 개행이 되어야 하므로
}

