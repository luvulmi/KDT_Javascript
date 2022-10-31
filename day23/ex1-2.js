'use strict';

const main_container = document.querySelector('.main_container'),
    pager = document.querySelector('.pager'),
    slide_list = document.querySelector('.slide_list'),
    li = document.querySelectorAll('li'),
    [backBtn, fowardBtn] = document.querySelectorAll('a');

let interval,
    beforelist = li[0],
    count = 0,
    beforeEventTime = -new Date(),
    v = 0;

for (let i = 0; i < li.length; i++) {
    pager.appendChild(document.createElement('a')).classList.add('atagBtn');
}

function executable() {
    let currentEventTime = new Date();
    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;
        return true;
    }
}

const atagBtn = document.querySelectorAll('.atagBtn');

for (let i = 0; i < li.length; i++) {
    atagBtn[i].addEventListener('mouseenter', function () {
        for (let j = 0; j < li.length; j++) {
            if ((v % li.length) <= count) {
                li[v++ % li.length].style.left = `-100%`;
            } else if ((v % li.length) > count) {
                li[v++ % li.length].style.left = `100%`;
            }
            beforelist.style.left = '0%';
        }
    })

    atagBtn[i].addEventListener('click', function () {
        if (executable()) {
            beforelist.style.zIndex = '0';
            if ((count % li.length) <= i) {
                beforelist.style.left = `-100%`;
            } else if ((count % li.length) > i) {
                beforelist.style.left = `100%`;
            }
            atagBtn[count % li.length].style.opacity = `.3`;
            li[i].style.left = `0%`;
            atagBtn[i % li.length].style.opacity = `.8`;
            beforelist = li[i];
            beforelist.style.zIndex = '1';
            count = i;
        }
    });
}