/*
    원시값에 대한 관계 추상 비교(>=,<=,>,<) 시 빈 문자열('')과 false는 그대로 0으로 평가되는 것을 확인가능.
    또한 문자열과 NaN, undefined는 관계 추상 비교(>=,<=,>,<) 시 비교 자체가 무 의미하여 무조건 false로 평가.
    단, null은 관계 추상 비교 시 빈 문자열('')과 false와 같이 0으로 수렴되어 평가되는 것을 확인 가능.
    따라서 동등 비교시에는 엄격(strict) equal로 평가하는 것이 무방하지만, 범위 평가를 위한 관계 추상 비교시
    에는 입력 데이터의 원시 자료형에 유의.
*/

console.log('aa' <= 0);                  // false
console.log('aa' >= 0);                  // false
console.log();

console.log(NaN <= 0);                   // false
console.log(NaN >= 0);                   // false

console.log(undefined <= 0);             // false
console.log(undefined >= 0);             // false
console.log();

console.log('--------------');

console.log('' <= 0);                    // true
console.log('' >= 0);                    // true
console.log(false <= 0);                 // true
console.log(false >= 0);                 // true
console.log();

console.log(null <= 0);                  // true
console.log(null >= 0);                  // true
console.log(null >= 0 && null <= 0);     // true
console.log();