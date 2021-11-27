"use strict";

var arr1 = [33, 44, 11, 22];

function deelClone(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      deelClone(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(deelClone(arr1));