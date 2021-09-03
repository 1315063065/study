### Web Worker
1. 主线程与Worker线程通过方法postMessage相互传递信息
2. 主线程与Worker线程通过事件onmessage接收相互传递的信息
3. Worker中引入第三方js使用方法importScripts([url,])
4. 主线程调用worker.terminate()结束线程
5. Worker线程通过调用this,close()结束自身线程
  
#### 主线程main.js
```js
    let inputs = document.querySelectorAll('input');
      // 判断浏览器是否支持Worker
      if (window.Worker) {
        // 生成一个专用的worker
        var myWorker = new Worker('worker.js');
        // 向一个Worker发送消息
        let first = inputs[0];
        let second = inputs[1];
        // 当first,second中间有一个值发生改变,将会将这两个值发给Worker
        first.onchange = function () {
          myWorker.postMessage([first.value, second.value]);
          console.log('Message posted to worker');
        };
        second.onchange = function () {
          myWorker.postMessage([first.value, second.value]);
          console.log('Message posted to worker');
        };
        // 使用onmessage响应worker回传的消息
        myWorker.onmessage = function (e) {
          result.textContent = e.data;
          console.log('Message recrived from worker');
        };
        // 主线程终止一个运行的worker
        myWorker.terminate();
      } else {
        console.log('Worker is not exist');
      }

```
#### worker.js
```js
// worker接受到消息之后
    onmessage = function (e) {
      console.log('Message received from main script');
      var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
      console.log('Posting message back to main script');
      this.postMessage(workerResult);
    };

    // workers 线程调用自己close进行关闭
    close();

```