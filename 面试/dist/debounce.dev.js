"use strict";

var debounce = function debounce(func, dealy) {
  var timeout;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      func();
    }, dealy);
  };
}; // const debounce = (func, delay) => {
//   let timeout;
//   return () => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(function () {
//       func()
//     }, delay)
//   }
// }


var log = debounce(function () {
  return console.log('call');
}, 5000);
log();
log();
log();