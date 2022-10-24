const main_container = document.querySelector('.main_container'),
  slide_container = main_container.querySelector('.slide_container'),
  slide_list = main_container.querySelector('.slide_list'),
  li = slide_list.querySelectorAll('li'),
  [prev, next] = main_container.getElementsByTagName('a');

let slide_Idx = 0,
  before = -new Date(),
  intervalId;


// 타이머 함수 정의
function timer() {
  let current = new Date();

  if (current - before > 1000) {
    before = current;
    return true;
  }
}

// 슬라이드 넘기기 함수
function slide() {
  let Idx = slide_Idx % li.length;

  slide_list.style.left = `${(Idx) * -100}%`;

  if ((Idx) === 0) {
    prev.classList.add('hidden');
    next.classList.remove('hidden');
  } else if ((Idx) === li.length) {
    next.classList.add('hidden');
  } else {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
  }
}

// 버튼 클릭 시 슬라이드 넘기기
main_container.addEventListener('click', function (e) {
  const a_target = e.target.closest('a');

  if (timer() && this.contains(a_target)) {
    slide_Idx += +a_target.dataset.moveValue;
    slide();
  }
});

// 마우스 호버 시 슬라이드 자동 넘기기
slide_container.addEventListener('mouseenter', () => {
  intervalId = setInterval(() => {
    slide_Idx++;
    slide();
  }
    , 2000);
});

// 슬라이드 자동 넘기기 취소
slide_container.addEventListener('mouseleave', () => {
  clearInterval(intervalId);
});
