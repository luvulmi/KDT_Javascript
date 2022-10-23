const main_container = document.querySelector('.main_container'),
  slide_container = main_container.querySelector('.slide_list'),
  images = slide_container.querySelectorAll('img'),
  [prev, next] = main_container.getElementsByTagName('a');

const prevMove = prev.dataset.movevalue,
  nextMove = next.dataset.movevalue;

let slideIdx = 0, before = 0;

// 타이머 함수
function timer(delay) {
  let after = new Date();

  if (delay < (after - before)) {
    before = after;
    return true;
  }
}

// 컨테이너에 이벤트 추가.
main_container.addEventListener('click', function (e) {
  e.preventDefault();

  const atarget = e.target.cloest('a');
  if (timer(1000)) {
    if (atarget === prev) {
      slideIdx += +prevMove;
      next.classList.remove('hidden');

      if (slideIdx <= 0) {
        prev.classList.add('hidden');
      }

    } else if (atarget === next) {
      slideIdx += +nextMove;
      prev.classList.remove('hidden');

      if (slideIdx >= images.length - 1) {
        next.classList.add('hidden');
      }

    } else {
      return;
    }

    slide_container.style.left = `${slideIdx * -100}%`;
  }
});

// 이미지 자동슬라이드
let intervalId;

function start() {
  intervalId = setInterval(function () {
    slideIdx += +nextMove;

    if (slideIdx === images.length) {
      slideIdx = 0;
      prev.classList.add('hidden');
      next.classList.remove('hidden');
    } else if (slideIdx === images.length - 1) {
      next.classList.add('hidden');
    } else {
      prev.classList.remove('hidden');
    }

    slide_container.style.left = `${slideIdx * -100}%`;
  }, 1500);
}

function stop() {
  clearInterval(intervalId);
}

slide_container.addEventListener('mouseenter', function () {
  start();
});

slide_container.addEventListener('mouseleave', function () {
  stop();
});

