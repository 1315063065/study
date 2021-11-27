### DOM 简介
- DOM 是js操作HTML文档的接口，使文档操作变得非常优雅、简便
- nodeType
  1. 1 元素节点
  2. 3 文字节点
  3. 8 注释节点
  4. 9 document节点
  5. 10 DTD节点
### 认识 document 对象
- document 对象是DOM中最重要的东西，几乎所有 DOM 的功能都封装在了 document 对象中
- document 对象也表示整个 HTML 文档，它是 DOM 节点的根
- document 对象的 nodeType 属性值是9
### 访问元素节点的常用方法
- document.getElementById() 通过id得到元素
- document.getElementBytagName() 通过标签名得到元素数组
- document.getELementByClassName() 通过类名得到元素数组
- document.querySelector() 通过选择器得到元素
- document.querySelectorAll() 通过选择器得到元素数组
```js
// 得到盒子1
var box = document.getElementById('box');
// 得到盒子2
var para = document.getElementById('para')
```
- 注意事项
  1. 如果页面上有相同id的元素，则只能得到第一个
  2. 不管元素藏着多深，都能通过id寻找到
### 延迟运行
- 在测试DOM代码时，通过JS代码一定要写到HTML节点的后面，否则JS无法找到相应的HTML节点
- 可以使用window.onload = function(){} 事件，使页面加载完毕后，在执行指定的代码

### 节点之间的关系
- 父子节点的之间的关系 firstChild - lastChild
- 子节点之间的关系 nextSibling - previousSibling

### 如何改变元素节点的CSS的样式
oBox.style.backgroundColor = 'red';
oBox.style.backgroundImage = 'url(images/1.jpeg);
oBox.style.fontSize = '32px';
- 设置私有属性
box.setAttribute('data-n',10)

### 孤儿节点
- 新创建出的节点是"孤儿节点"，这意味着它并没有被挂载到DOM树上，我们无法看见它
  1. var op = document.createElement('p');
- 必须继续使用appendChild()或者insertBefore()方法将孤儿节点插入DOM树上
- appendChild()
  1. 任何已经在DOM树上的节点，都可以调用appendChild()方法，它可以将孤儿节点挂载到它的内部，成为它的最后一个子节点
- insertBefore()
  1. 任何已经在DOM树上的节点，都可以调用insertBefore()方法，它可以将孤儿节点挂载到它的内部，成为它的"标杆子节点"之前的节点
  2. 父节点.insertBefore(孤儿节点,标杆节点)

### 什么是"事件监听"
- DOM 运行 js 代码以让 HTML 元素对事件作出反应
- 什么事 "事件" ： 用户与网页的交互动作
- "监听"，顾名思义，就是让计算机随时能够发现这个事件发生了，从而执行程序员预先编写的一些程序
- 设置事件监听的方法主要有 onXXX 和 addEventListener() 两种
- 鼠标监听事件有哪些
  1. onclick 当鼠标单击某个对象
  2. ondblclick 当鼠标双击某个对象
  3. onmousedown 当某个鼠标按键在某个对象上被按下
  4. onmouseup 当某个鼠标按键在某个对象上被松开
  5. onmousemove 当某个鼠标按键在某个对象上被移动
  6. onmouseenter 当鼠标进入某个对象
  7. onmouseleave 当鼠标离开某个对象
- 键盘监听事件有哪些
  1. onkeypress 当某个键盘的键被按下 (系统按钮如箭头键和功能键无法得到识别)
  2. onkeydown 当某个键盘的键被按下 (系统按钮可以识别，并且回优先于onkeypress发生)
  3. onkeyup 当某个键盘的键被松开

### 常见的表单事件监听
- onchange 当用户改变域的内容
- onfocus 当某元素获得焦点
- onblur 当某元素失去焦点
- onsubmit 当表单被提交
- onreset 当表单被重置