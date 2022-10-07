'use strict';

let stName = prompt('학생명: ');

let sum = 0;

const subjects = ['국어점수', '영어점수', '수학점수', '합계', '평균'];
const score = new Array(subjects.length);


for (let i = 0; i < subjects.length; i++) {
    if(i < subjects.length - 2){
        score[i] = +prompt(`${subjects[i]}`);
        sum += score[i];
    } else if(i < subjects.length - 1) {
        score[i] = sum;
    } else {
        score[i] = Math.trunc(sum / (subjects.length - 2));
    }
}

document.write('<table>');
document.write(`<caption> &lt; ${stName} 학생의 성적 &gt; </caption>`);
for (let i = 0; i < subjects.length; i++){
    document.write('<tr>')
    document.write(`<th scope="col">${subjects[i]}</th>`)
    document.write(`<td>${score[i]} 점</td>`)
    document.write('</tr>')
}
document.write('</table>');