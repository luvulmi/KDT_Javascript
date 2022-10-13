// 람다식에서 this는 함수 내에서 사용하셈. 람다식 내에서는 빈객체를 반환.
// 

'use strict';

function testFunc() {
    console.log(this);      // 일반함수에서 this는 객체를 할당 받기전 undefined 반환. 함수를 동적으로 객체에 할당하면
}                           // 함수 내의 this는 동적 할당된 객체를 지정.

const testArrow = () => {
    console.log(this);      // 화살표 함수에서의 this는 내부적으로 익명 객체를 생성하므로 빈 객체를 반환.
};

testFunc();
testArrow();

const car1 = {
    carName: '소나타',
    viewCarName() {
        function output() {
            console.log(this.carName);  // viewCarName메서드 내에서 this는 할당 객체 car1의 carName을 가리키지만, output함수 내에서
        }                               // this는 4행에서와 마찬가지로 ouput함수가 객체에 할당되지 않은 상태이므로 undefined를 반환
        output();                       // 하여 this.carName은 컴파일 오류.
    },
}

// car1.viewCarName();

const car2 = {
    carName: '아반떼',
    // viewCarName: () => console.log(this.carName),    // 화살표 함수 내에서 this는 8행과 같이 빈 객체가 반환되므로 this.carName은
    //                                                  // undefined 반환. 따라서 객체 내에 함수 정의 시 객체에 할당된 다른 프로퍼티를
    //                                                  // 참조해야 하는 경우에는 람다식이 아닌 객체 프로퍼티에 익명함수를 할당하는
    //                                                  // 방식을 사용. ( 17행과 같은 객체 메서드 축약 포함. )
    //                                                  // 즉, 람다식은 객체의 다른 프로퍼티에 영향을 받지 않고 독립적인 기능을 하는
    //                                                  // 동작의 전달을 해야하는 경우에 활용하는 것이 적합.

    viewCarName() {
        const output = () => console.log(this.carName); // 메서드 내에서 화살표 함수의 this는 빈 객체를 참조하지 않고 자신을 포함하는
        output();                                       // 메서드(viewCarName)의 this를 참조.
    },
}

car2.viewCarName();