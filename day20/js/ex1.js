'use strict';

let service_list = document.querySelectorAll('.service_list');
let btnCollapse = document.querySelector('.btn_collapseAll');

for (let p of service_list) {
  p.addEventListener('click', function () {
    hideAll(); // 먼저 다 접어주기.
    this.classList.remove('hidden');
    this.children[0].textContent = this.children[0].textContent.replace('+', '-');
  });
}

// 다 접는 함수 생성.
function hideAll() {
  for (let q of service_list) {
    q.classList.add('hidden');
    q.children[0].textContent = q.children[0].textContent.replace('-', '+');
  }
}

btnCollapse.addEventListener('click', hideAll);
