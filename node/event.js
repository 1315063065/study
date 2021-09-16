const EventEmitter = require('events').EventEmitter;

class Greetime extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('newlesson', { price: Math.random() * 100 })
    }, 3000)
  }
}

const geektime = new Greetime;

geektime.addListener('newlesson', (res) => {
  console.log('yeah', res)
})

module.exports = geektime