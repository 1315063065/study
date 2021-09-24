const glob = require('glob');

// var result = null;

// console.time('glob');
// result = glob.sync(__dirname + '/**/*')

// console.timeEnd('glob');
// console.log(result)
// console.time('glob')
// glob(__dirname + '/**/*', function (err, res) {
//   result = res;
//   console.log(result)
// })
// console.timeEnd('glob')
interview(function (res) {
  if (res instanceof Error) {
    console.log('cry')
  } else {
    console.log('smile')
  }
})

function interview(callback) {
  setTimeout(() => {
    if (Math.random() < 0.1) {
      callback('success');
    } else {
      callback(new Error('fail'));
    }
  }, 500)
}