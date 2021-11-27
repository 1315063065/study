"use strict";

var arr = [];

var _loop = function _loop(i) {
  arr.push(function () {
    console.log(i);
  });
};

for (var i = 0; i < 5; i++) {
  _loop(i);
}

arr[2]();
arr[3]();