"use strict";
let i = 0;
let arr = ["img1.jpg", "img2.jpg", "img3.jpg"];

function next() {
  i = (i + 1) % arr.length;
  document.getElementById("banner-nongtrai").style.background =
    "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.616)), url('/footer/" +
    arr[i] +
    "')  center center/cover no-repeat";
  // setTimeout(prev, 1000);
}

function prev() {
  i = (i - 1 + arr.length) % arr.length;
  document.getElementById("banner-nongtrai").style.background =
    "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.616)), url('/footer/" +
    arr[i] +
    "')  center center/cover no-repeat";
}
