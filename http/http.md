### 1.网路协议分层
- 物理层:主要作用是定义物理设备如何传输数据
- 数据链路层:在通信的实体间建立数据链路连接
- 网络层:为数据在结点之间传输创建逻辑链路
#### 传输层
- 向用户提供可靠的端到端(End-to-End)服务
- 传输层向高层屏蔽了下层数据通信的细节

#### 应用层
- 为应用软件提供了很多服务
- 构建于TCP协议之上
- 屏蔽网络传输相关细节

#### URI、URL、URN
- URI(Uniform Resource Identifier)统一资源标志符 用来唯一标识互联网上的信息资源
- URL(Uniform Resource Loacator)统一资源定位器
- URN 永久统一资源定位符

#### CORS
- 通过标签src,ref解决跨域问题(JSONP)
- 'Access-Control-Allow-Origin': '*'

#### CORS预请求
- 允许方法 GET HEAD POST
- 允许的Content-Type
  1. text/plain
  2. multipart/form-data
  3. application/x-www-form-urlencoded
- 其他限制:
  1. 请求头限制
  2. XMLHttpRequestUpload 对象均没有注册任何事件监听器
  3. 请求中没有使用ReadableStream对象
#### cache-control 都是声明，不是强制
- 可缓存性:
  1. public: 所有设备都可以缓存
  2. private: 只有发起请求的浏览器才能缓存
  3. no-cache: 本地存储缓存，但是每次使用都需要到服务器得到确定的回复，才能使用
- 到期
  1. max-age: 缓存秒数
  2. s-maxage: 代理服务器才会生效
  3. max-stale: 代表即使缓存过期，但是仍在这个时间范围内，仍可以直接通过缓存访问
- 重新验证
  1. must-revalidate:max-age 到期之后，发送请求给服务器，确定这段数据是否真的过期了
  2. proxy-revalidate:缓存服务器到期后，必须去后端请求一遍
- 其他
  1. no-store: 没缓存
  2. no-transform: 不能改变传输过程

### 资源认证
#### 头
- Last-Modified 上次修改时间 配合If-Modified-Since 或者 If-Unmodified-Since 使用 对比上次修改时间以验证资源是否需要更新
- Etag 数据签名 配合If-Match或者If-Non-Match 对比资源的签名判断是否使用缓存

#### Cookie
- 通过Set-Cookie设置 
- 下次请求会自动带上
- 键值对，可以设置多个
1. Cookie 的属性 
   - max-age 和 expires 设置过期时间
   - Secure 只在 https 的时候发送
   - HttpOnly无法通过document.cookie访问
2. Cookie 如果没有设置过期时间，浏览器关掉就没有了
#### 数据协商
- Accept
  1. Accept
  2. Accept-Encoding
  3. Accept-Language
  4. User-Agent
- Content
  1. Content-Type
  2. Content-Encoding
  3. Content-Language
#### Redict
- 301 永久重定向
- 302 临时重定向
  
#### CSP
- 限制资源获取
- 报告资源获取越权
### 深入到TCP
#### 什么是三次握手
#### HTTPS链接的创建过程，以及为什么HTTPS就是安全的
#### 什么是长链接，为什么需要长链接
#### HTTP2的信道复用为什么能提高性能