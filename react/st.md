#### 为什么需要不可变数据
1. 性能优化
2. 易于追踪和调试
3. 易于推测
### React Route
#### 为什么需要路由
1. 单页应用需要进行页面切换
2. 通过URL可以定位到页面
3. 更有语义的组织资源

#### React Router 特性
1. 声明式路由定义
2. 动态路由

#### 三种路由实现的方式
1. URL路径
2. hash路由
3. 内存路由

#### 基于路由配置进行资源组织
1. 实现业务逻辑的松耦合
2. 易于扩展，重构和维护
3. 路由层面实现Lazy Load

#### React-Router 核心api
```jsx
// <Link>: 普通链接，不会触发浏览器刷新
<Link to="/about">About</Link>

// <NavLink>: 类似Link但是会添加当前选中状态(可以加一个css class)
<NavLink to="faq" activeClassName="selected">FAQs</NavLink>

// <Prompt>: 满足条件时提示用户是否离开当前页面
<Prompt when={fromIsHalfFilledOut} message="Are you sure want to leave?"/>

// <Redirect>: 重定向当前页面，例如登陆判断
<Redirect to="/dashboard"/>

// <Route>: 路由配置的核心标记，路径匹配时显示对应组件
<Route exact path="/news" component={Home}/> //exact 更加精确
<Route path="/news" component={Home/>}>

// <Switch>: 只显示第一个匹配的路由
<Switch>
  <Route path="/news" component={Home}/>
  <Route path="/news" component={Home}/>
  <Route path="/news" component={Home}/>
</Switch>
```

#### 如何URL传递参数
1. 如何通过URL传递参数: 
```jsx
  <Route path="/news/:id" component={Home}/>
```
2. 如何获取参数:this.props.match.params
3. https://github.com/pillarjs/path-to-regexp

#### 嵌套路由
1. 每个React组件都可以是路由容器
2. React Router的声明式语法可以方便的定义嵌套路由