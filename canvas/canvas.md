#### 绘制矩形
```js
  // 绘制一个矩形
  fillRect(x,y,width,height)
  // 绘制一个矩形边框
  strokeRect(x,y,width,height)
  // 清楚指定矩形区域,让清除部分完全透明
  clearRect(x,y,width,height)

```

#### 绘制路径
1. 首先，你需要创建路径起始点
2. 然后你使用画图命令去画出路径
3. 之后你把路径封闭
4. 一旦路径生成，你就能通过描边或填充绘制区域来渲染图形
```js
  // 新建一条路径，生成之后，图形命令被指向到路径上生成路径
  beginPath()
  // 闭合路径之后图形绘制命令又重新指向到上下文中
  closePath()
  // 通过线条来绘制图形轮廓
  storke()
  // 通过填充路径的内容区域生成实心的图形
  fill()

```

#### 绘制一个三角形
```js
  function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```
1. moveTo(x,y) 将笔移动到指定的坐标x以及y上
2. lintTo(x,y) 绘制一条从当前位置到指定位置x以及y位置的直线
3. arc(x, y, radius, startAngle, endAngle, anticlockwise) 画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。
4. arcTo(x1, y1, x2, y2, radius) 根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。
