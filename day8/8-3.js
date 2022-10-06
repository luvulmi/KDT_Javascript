/*
    < 원시 값과 불린값 변환 >

- 자바스크립트에서는 null, NaN, Undefined, ""(빈문자열), 0 등을 논리연산시  false로 변환하여 평가 가능하며,
  그 외의 값에 대해서는 true로 변환하여 평가 가능. 이에 대한 변환 확인은 not(!)연산자를 이용하여 확인 가능.
  원시 값에 대한 불린 값으로의 변환은 Boolean객체나 !!를 이용하여 직접 변환 가능.

*/

/* not(!)을 이용한 변환 확인. */
console.log(!5);        // false
console.log(!0);        // true
console.log(!"Tom");    // false
console.log();

console.log(!null);     // true
console.log(!NaN);      // true
console.log(!undefined);   // true
console.log(!"");          // true
console.log("-----------")

/* Boolean객체를 이용한 불린값 변환. */
console.log(Boolean(5));    // true
console.log(Boolean(0));    // false
console.log(Boolean("Tom"));  // true
console.log();

console.log(Boolean(null));     // false
console.log(Boolean(NaN));      // false
console.log(Boolean(undefined));    // false
console.log(Boolean(""));           // false
console.log("-----------");


/* !!을 이용한 불린값 변환. */
console.log(!!5);   // true
console.log(!!0);   // false
console.log(!!"Tom");   // true
console.log();

console.log(!!null);    // false
console.log(!!NaN);     // false
console.log(!!undefined);   // false
console.log(!!"");      // false