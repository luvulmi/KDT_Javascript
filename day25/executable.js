export default function executable(delay) {
  let beforeTime = -new Date(); // 전역으로 바깥에 선언하기보다 클로저 함수 안에 넣기

  return function () {
    if (new Date() - beforeTime > delay) { // 위의 변수 참조.
      beforeTime = new Date();

      return true;
    }
  }
}