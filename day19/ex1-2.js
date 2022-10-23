const $slide_container = document.querySelector('.main-container'),
  $image_container = $slide_container.querySelector('.slide_list'),
  $images = $image_container.querySelectorAll('img'),
  [$prev, $next] = $slide_container.getElementsByTagName('a');

// 버튼의 dataset에서 moveValue를 가져옴
const prevMove = $prev.dataset.moveValue,
  nextMove = $next.dataset.moveValue;

let slideIndex = 0, before = 0;

// 타이머 정의
function timer(delay) {
  let after = new Date();

  if (delay < (after - before)) {
    before = after;
    return true;
  }
}

// 컨테이너에 이벤트를 추가.
$slide_container.addEventListener('click', function (event) {
  event.preventDefault();

  const aTarget = event.target.closest('a');
  if (timer(1000)) {
    if (aTarget === $prev) {
      // 인덱스에 -1
      slideIndex += +prevMove;

      $next.classList.remove('hidden');
      if (slideIndex <= 0) {
        $prev.classList.add('hidden');
      }
    } else if (aTarget === $next) {
      // 인덱스에 +1
      slideIndex += +nextMove;

      $prev.classList.remove('hidden');
      if (slideIndex >= $images.length - 1) {
        $next.classList.add('hidden');
      }
    } else {
      return;
    }

    $image_container.style.left = `${slideIndex * -100}%`;
  }
});

// ==================== 이미지 자동 슬라이드 ====================
// 인터벌 멈추기 위한 식별자
let intervalId;

function start() {
	// 준비한 식별자에 인터벌 담아둠.
  intervalId = setInterval(function () {
		// 인덱스에 +1
    slideIndex += +nextMove;

    if (slideIndex === $images.length) {
      // 인덱스가 5가 되면 인덱스를 0으로 만들면서
      // 이전 버튼을 숨기고 다음 버튼을 보이게 만듬.
      slideIndex = 0;
      $prev.classList.add('hidden');
      $next.classList.remove('hidden');
    } else if (slideIndex === $images.length - 1) {
      // 인덱스가 img 배열의 마지막 인덱스와 동일하면 다음 버튼 숨김.
      $next.classList.add('hidden');
    } else {
      // 그 외의 경우에는 이전 버튼이 보임.
      $prev.classList.remove('hidden');
    }

    // 실제로 이미지가 변해야 하므로 left 값에 변동을 줌.
    $image_container.style.left = `${slideIndex * -100}%`;
  }, 1500);
}

// 인터벌을 멈추는 함수.
function stop() {
  clearInterval(intervalId);
}

// 이미지 슬라이드에 호버를 하면 이미지가 자동으로 움직이게 만든다.
$image_container.addEventListener('mouseenter', function () {
  start();
});

// 마우스를 거두면 멈춘다.
$image_container.addEventListener('mouseleave', function () {
  stop();
});