"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var arr = [1, [2, 3, [4, 5]]];

var flattern = function flattern(arr) {
  var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattern(arr[i], res);
    } else {
      res.push(arr[i]);
    }
  }

  return res;
};

console.log(flattern(arr));

function flattern1(arr) {
  return arr.reduce(function (pre, next) {
    return pre.concat(Array.isArray(next) ? flattern1(next) : next);
  }, []);
}

console.log(flattern1(arr));

function flattern2(arr) {
  while (arr.some(function (item) {
    return Array.isArray(item);
  })) {
    var _ref;

    arr = (_ref = []).concat.apply(_ref, _toConsumableArray(arr));
  }

  return arr;
}

console.log(flattern2(arr));

function flattern3(arr) {
  return arr.toString().split(',').map(function (item) {
    return +item;
  });
}

console.log(flattern3(arr));