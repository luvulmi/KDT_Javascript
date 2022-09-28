'use strict';

let n1, n2;
let tot = 0;

// 교환을 이용한 풀이
// swaping

n1 = +prompt('정수1:');
n2 = +prompt('정수2:');

// n1 < n2가 정상이라고 가정했을 때

if (n1 > n2) {
    let t = n1;
    //메모리를 위해 if문 안에서만 지역변수로 선언하기.
    n1 = n2;
    // 우변이 좌변으로 대입된다.
    n2 = t;
}

for (let i = n1; i <= n2; i++) {
    tot += i;
}

alert(`${n1}부터 ${n2}까지의 합 : ${tot}`);



