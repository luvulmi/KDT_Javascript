'use strict';

const service_container = document.querySelector('.service_container'),
    Service_list = service_container.querySelectorAll('li'),
    BtnCollapse = document.querySelector('button');

let List_target = li[0];

function textReplace(target, txt1, txt2) {
    target.children[0].textContent = target.children[0].textContent.replace(txt1, txt2);
}

function tmpRemove() {
  List_target.classList.add('hidden');
    textReplace(List_target, '-', '+');
}

service_container.addEventListener('click', function (e) {
  // 클릭한 타겟이 service_target인지 확인
  // service_target에 자식이 없으므로 closet 필요 없음.
    const list = e.target.parentNode;

    if (list.classList.contains('service_list')) {
        tmpRemove();

        list.classList.remove('hidden');
        textReplace(list, '+', '-');
        tar = list;
    }
});

BtnCollapse.addEventListener('click',tmpRemove);