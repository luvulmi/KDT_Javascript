'use strict';

let numberOfproperty;
let dynamicObj;

function getObj(numberOfproperty) {
    let tempObj = {};
    let key, value;

    for (let i = 0; i < numberOfproperty; i++) {
        key = prompt('객체의 key 입력 : ');
        value = prompt(`${key} :`);

        tempObj[key] = value;
    }

    return tempObj;
}

numberOfproperty = +prompt('생성하려는 객체의 속성수를 입력하시오!');   // numberOfproperty는 10행의 비교연산에 의해 자동 형변환되므로
dynamicObj = getObj(numberOfproperty);                                // 형변환이 필요없지만 안정성을 위해 부호로 형변환 처리.

for (const key in dynamicObj) {
    document.write(`${key} : ${dynamicObj[key]}<br>`);      // 생성된 객체의 프로퍼티를 화면에 출력.
}

const arr = [1, 2, 3, 4, 5];

for (let index in arr) {
    // 인덱스 값을 순회
    console.log(index);
}

for (const item of arr) {
    // 요소 자체 값으로 순회
    console.log(item);
}