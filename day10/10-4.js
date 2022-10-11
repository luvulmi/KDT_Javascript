function f1() {
    console.log(123);
}

f1();

function f2() {
    console.log(456);
}

f2();

f1 = f2; // 자바스크립트에서는 함수를 변수로
f1();

