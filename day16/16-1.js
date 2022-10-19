// 함수 내에서 this > 객체가 없다면 undefined. 
// this > 함수에서 실행하면 undefined
// 함수에 참조를 걸면 그 해당 객체로


'use strict';

let link = document.getElementsByTagName('li');

function setBackgroundYellow() {
    console.log(this);
    this.style.backgroundColor = 'yellow'; // 여기서는 this로 받을 객체가 없으므로 undefined.
}

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
        setBackgroundYellow(); // 함수를 매개변수를 받지않고 실행하면 마찬가지로 undefined. 
    });
}

/*
   < this 를 매개변수로 전달 >
*/
function setBackgroundYellow(self) {
    self.style.backgroundColor = 'yellow';
}

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
        setBackgroundYellow(this);
    });
}

/* =================================================================================== */

/*
   < 함수의 참조 전달을 통한 함수의 객체화 >

- 익명객체를 익명함수나 람다식 형태로 전달하여 addEventListener 메서드 내에서 콜백호출을
  처리하는 것과 같이 js 에서는 함수를 하나의 객체로 인식함으로써 함수의 참조만 전달함으로써
  동일한 콜백호출 처리 결과를 도출 가능.
  이는 함수의 참조를 통해 직접 함수의 본체와 연동시킴으로써 객체화된 함수 내에서의 this 는
  익명객체와 동일한 이벤트 발생 객체 자신을 의미.
  따라서 이때의 함수의 매개변수 지정은 익명함수나 람다식의 매개변수와 동일한 이벤트 객체를
  반환.

*/

// 부모요소에 이벤트를 걸어도 가까운 자식요소에 이벤트가 걸려버리는 경우가 발생.
// 부모요소는 자식요소를 둘러싸고만 있을 뿐이므로.

function setBackgroundYellow(e) { // e라는 매개변수를 통해서 실제 이벤트가 걸리는 이벤트 요소가 해당이 됨.
    // this.style.backgroundColor = 'yellow';
    e.target.style.backgroundColor = 'yellow'; // a를 누를경우 a에만 yellow. h3 누를경우 h3에 yellow.
    console.log(e.target); // 실제 이벤트가 걸리는 이벤트 요소가 해당. 여기서는 h3가 해당.
    console.log(this); // 참조가 걸리는 해당 객체. li가 해당.
}

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', setBackgroundYellow);
}