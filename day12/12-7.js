'use strict';

const car1 = {
  carName: '소나타',
};

const car2 = {
  carName: '아반떼',
};

function viewCarName() {
  console.log(this.carName);      // this를 활용한 외부함수에 대한 동적 객체 할당(메서드화). 함수 내에서 this는 기본적으로
}                                 // 값이 할당되지 않은 상태(undefined)를 유지하다가  객체에 포함되어 호출되는 시점에서
//                                // 해당 객체를 참조.

// viewCarName();                 // 객체가 할당되지 않은 상태에서의 this 는 undefined 를 반환하고 undefined 에 대한
//                                // 속성 참조 연산(.)을 하므로 컴파일 에러.

car1.viewCarName = viewCarName;
car2.viewCarName = viewCarName;

car1.viewCarName();
car2.viewCarName();