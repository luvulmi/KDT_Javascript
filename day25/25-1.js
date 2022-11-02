import print from "../subModule/test.js"; // 확장자명 작성

print();

// 내부함수는 외부함수를 참조 가능함.
function test() {
  let n = 5;

  return function () {
    return n++;
  }
}

const output = test();

console.log(output());
console.log(output());
console.log(output());

const output2 = test();

console.log(output2());
console.log(output2());
console.log(output2());
console.log(output2());
