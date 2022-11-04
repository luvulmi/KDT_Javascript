'use strict';

import executable from "./executable.js";

const page_container = document.querySelector('.page_container'),
  page = page_container.querySelectorAll(".page"),
  btn = page_container.querySelectorAll('.btn'),
  delay = 1500,
  delayTime = executable(delay);

let nowPageNum = 0,
  nextPageNum = 0;

function pageNation (tar, tg1, tg2) {
  let flag;

  if (tar === tg1 && nowPageNum > 0) {
    flag = true;
  } else if (tar === tg2 && nowPageNum < (page.length - 1)){
    flag = false;
  } else {
    return;
  }

  if(delayTime()){
    page[nowPageNum].style.top = `${flag ? 1 : -1 * 100}%`;
    nextPageNum = flag ? --nextPageNum : ++nextPageNum;
    page[nextPageNum].style.top = '0';
    nowPageNum = nextPageNum;
  }
}

page_container.addEventListener('click', (e) => {
  let tar = e.target;
  pageNation(tar, btn[0], btn[1]);
});

window.addEventListener('wheel', (e) => {
  let tar = e.deltaY;
  pageNation(tar, -100, 100);
});

// for (let i = 0; i < page.length; i++) {
//   page[i].style.top = i + "00%";
// }

// let height = 0;

// window.addEventListener("wheel", function (e) {
//   let wheel = e.deltaY;



//   if (wheel > 0) {
//     height++
//     pageFrame.style.top = -height + "00%";
//   } else if (wheel < 0) {
//     height--
//     pageFrame.style.top = -height + "00%";
//   }

// });