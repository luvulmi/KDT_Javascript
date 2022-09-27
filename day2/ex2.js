'use strict';

let n1, n2;

n1 = +prompt('정수1:');
n2 = +prompt('정수2:');

// n1 == n2 ? alert('두 수는 같음'): alert(`큰 수는 ${n1 > n2 ? n1 : n2}`));
// 다음과 같이 삼항조건연산자를 사용하게 될 시에는 가독성이 매우 떨어짐.

if (n1 === n2) {
    alert(`두 수는 같음`);
} else {
   alert(`큰 수는 ${n1 > n2 ? n1 : n2}`);
}

close(); //닫지않으면 갇힘.