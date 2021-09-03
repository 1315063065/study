### Axios
- Axios是一个基于Promise网络请求库,作用于node.js和浏览器中。在服务端它使用原生node.js http模块，而在客户端(浏览器)则使用XMLHttpRequests
- 特性
  1. 从浏览器创建XMLHttpRequests
  2. 从node.js创建http请求
  3. 支持PromiseAPI
  4. 拦截请求和响应
  5. 转换请求和相应数据
  6. 取消请求
  7. 自动转换JSON数据
  8. 客户端支持防御XSRF

#### Axios内部运作流程
1. 开始: create: Axios构造函数
2. 执行请求拦截器: new InterceptorManger() request拦截器
3. 派发请求: dispatchRequest 派发请求
4. 转换请求数据: transformData for request data
5. 适配器处理请求: 使用默认适配器adapter处理请求，区分浏览器或node环节 getDefaultAdapter()
6. 转换响应数据: transformData for response data
7. 执行响应拦截器: new InterceptorManager() response 拦截器
8. 结束: retuan axios

#### 5个模块
- Axios构造函数
- 请求/响应拦截器
- dispatchRequest派发请求
- 转换请求/响应数据
- 适配器处理HTTP请求

```js
  //方式1 axios(config)
  axios({
    method: 'get',
    url: 'xxx',
    data: {}
  })

  //方式2 axios(url[,config]),默认get请求
  axios('http://xxx');

  //方式3 使用别名进行请求
  axios.request(config)
  axios.get(url[,config])
  axios.post(url[,data[,config]])
  axios.put(url[,data[,config]])

  //方式4 创建axios实例,自定义配置
  const instance = axios.create({
    baseURL: 'https://some-domian.com/api/';
    timeout: 1000,
    headers: {'X-Custome-Header':'foobar'}
  });

  axios#request(config)
  axios#get(url[, config])
  axios#post(url[, data[, config]])
  axios#put(url[, data[, config]])
  
```
