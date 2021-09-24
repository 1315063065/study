"use strict";

var eventloop = {
  queue: [],
  loop: function loop() {
    while (this.queue.length) {
      var callback = this.queue.shift();
      callback();
    }

    setTimeout(this.loop.bind(this), 50);
  },
  add: function add(callback) {
    this.queue.push(callback);
  }
};
eventloop.loop();
setTimeout(function () {
  eventloop.add(function () {
    console.log(1);
  });
}, 500);
setTimeout(function () {
  eventloop.add(function () {
    console.log(2);
  });
}, 800);