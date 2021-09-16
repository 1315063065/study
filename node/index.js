const geektime = require('./event.js')

geektime.addListener('newlesson', (res) => {
  if (res.price < 80) {
    console.log('buy!', res)
  }
})