'use strict';

let stName;
let kor, eng, math;
let avg, grade;

stName = prompt('이름:');
kor = +prompt('국어 점수 :');
eng = +prompt('영어 점수 :');
math = +prompt('수학 점수 :');
avg = ( kor + eng + math ) / 3;

if ( avg >= 90 ) {
    grade = 'A';
} else if ( avg >= 80 ) {
    grade = 'B';
} else if ( avg >= 70) {
    grade = 'C';
} else {
    grade = 'F';
}

alert(`<성적>\n 학생명 : ${n}, 학점 : ${grade}, 평균: ${avg}`);

