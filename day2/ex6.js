// for (;;) {

//     down = +prompt('밑수:');
//     up = +prompt('지수:');

//     if ( down < 0 || up < 0) {
//         alert('음수가 입력되었습니다. 재입력 바랍니다.')
//     } else {
//         for (let i = star; i <= up; i++) {
//             star *= down;
//         }
//         alert(`${down}의 ${up}승은 ${star}입니다.`)
//         break;
//     }
// }

'use strict';

let down, up;
let star = 1;

for(;;) { 
    down = +prompt('밑수:');
    if ( down >= 0) {
        up = +prompt('지수:');
        if ( up >= 0) {
            for (let i = 1; i <= up; i++) {
                star *= down;
            }
            break;
            //break문이 걸리면 가장 가까운 반복문에서 탈출.
        }
    }
    alert('음수가 입력되었습니다. 재입력 바랍니다.');
}
alert(`${down}의 ${up}승은 ${star}입니다.`);