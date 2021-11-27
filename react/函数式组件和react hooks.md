### 什么是(钩子)hooks
- 消息处理的一种方法，用来监视指定程序
- 函数组件中需要处理副作用，可以用钩子把外部代码"钩"进来
- 常用的钩子:useState,useEffect,useContext,useReducer
- hooks一律使用use前缀命名:useXxx
- hooks的本质：一种特殊的函数，为你的函数形式组建注入特殊的功能
### hooks产生的原因
- 有些类组件冗长而且复杂，难以服用
- 结局方案:无状态组件与HOC(高阶组件)，但还是存在诸多问题
- Hooks的目的就是为了给函数式组件加上状态

- 生命周期函数会同时处理多项任务：发起ajax、跟踪数据状态、绑定事件监听
- 函数式组件则轻量化很多，使用Hooks钩子来钩入组件状态

1. Hooks 代言了React 架构的一次重大变革
  - 不需要类组件
  - 不会再有this、不会再有binding、甚至有可能取代redux
  - 简化了代码、减少了模版、降低了学习难度
### 常见的hooks函数
1. useState
   - React自带的一个hook函数，声明组件状态
   - 参数可以设置state的初始值
   - 返回值是一个只有两个元素的数组:[状态，状态更新函数] 
2. useEffect 副作用钩子
```js
  useEffect(() => {
    document.title = `点击${count}`
  },[count])
```
  -  可以取代生命周期函数 componentDidMount,componentDidUpdate 和 componentWillUnmount
  -  给函数式组件添加副作用(side effect)
### 还有哪些自带的Effect Hooks
- useContext
- useReducer
- useCallback
- useRef
- useLayoutEffect
- useDebugValue