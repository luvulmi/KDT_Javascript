'use strict';

const option = {
    hiPass: true,
    sunRoof: false
}

const car = {
    carName: 'poter',          // 리터럴 객체 정의 후에도 외부에서 객체의 프로퍼티를 추가할 수 있듯이
    color: 'blue',             // 객체내 별도의 필드 정의 없이도 객체에 포함된 메서드 내에서도 this키워드를
    typeOfFuel: 'diesel',      // 이용해 필드 추가 정의 가능.                                                   // fuel(퓨어) : 연료
    'car type': 'truck',
    performance: {             // 값(value)에는 리터럴 객체를 직접 지정 가능.                                   // performance : 성능                                
        speed: 100,
        breakCapability: 10    // 제동력.                                                                       // capability(케이퍼빌러티) :능력, 역량
    },
    carOption: option,          // 값(value)에는 외부 객체나 외부 함수의 참조도 포함 가능.

    inforCar: function () {     // 객체 메서드.
        console.log(`차명: ${car.carName}, 색상: ${car.color}, 종류: ${car['car type']}`)
    },

    run() {
        console.log('부릉부릉');
    }
}

console.log(car.performance.speed);
console.log(car.performance.breakCapability);
console.log("하이패스 " + ((car.carOption.hiPass) ? "" : "미") + "장착");
console.log("선루프 " + ((car.carOption.sunRoof) ? "" : "미") + "설치");
console.log(car);
console.log('------------------------');

car.inforCar();
car.run();
console.log('------------------------');

function convey() {
    console.log('짐을 실어나르기.');
}

car.stop = function () {        // 함수 표현식을 활용한 객체 메서드 추가.
    console.log('끼이익');
};

car.convey = convey;            // 외부 함수의 참조 전달을 통한 메서드 추가.


car.stop();
car.convey();
car['convey']();     // 계산된 프로퍼티를 활용한 메서드 호출도 가능.
console.log('------------------------');


// car.attack();    // 존재하지 않는 필드에 대한 접근은 undefined 를 반환하지만,
//                  // 존재하지 않는 메서드에 대한 접근은 컴파일 에러가 발생됨에 주의.

'use strict';

let name = '박성연';
let age = 22;

const teacher1 = {
  name: name,         // key부분의 name은 내부적으로 문자열로 변환된 'name'으로 변환되어 처리되므로
  age: age,           // 외부 전역 변수(name)에 영향을 받지 않지만,   value 부분의 name은 외부 전역
};                      // 변수 name에 저장된 값을 읽어들이고 age도 동일하게 적용.
//                      // ( js에서는 string도 참조형이 아닌 기본형임에 주의. )
console.log(teacher1);
console.log();



// 프로퍼티 단축.
const teacher2 = {
  name,               // 위와 같이 key와 value가 동일한 경우 당행과 같이 단축 문법 제공.
  age,
};

console.log(teacher2);