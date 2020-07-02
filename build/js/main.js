'use strict';

let stickyBlock = document.querySelector('.block-4');
let stickyBorder = document.querySelector('.block-7');
let stickyParent = document.querySelector('.left');
let scrollSum = stickyParent.offsetHeight - stickyBlock.offsetHeight - stickyBorder.offsetHeight - 10;

window.onscroll = function () {
  if (window.scrollY >= scrollSum) {
    stickyBlock.classList.remove('fixed');
    stickyParent.classList.add('align-content-end');
  } else {
    stickyBlock.classList.add('fixed');
    stickyParent.classList.remove('align-content-end');
  }
};
