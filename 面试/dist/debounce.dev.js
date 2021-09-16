"use strict";

var debounce = function debounce(func, delay) {
  var timeout;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      func();
    }, delay);
  };
};

var log = debounce(function () {
  return console.log('call');
}, 5000);
log();
log();
log();