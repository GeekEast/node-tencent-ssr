<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [Node.js 构建极客时间](#nodejs-%E6%9E%84%E5%BB%BA%E6%9E%81%E5%AE%A2%E6%97%B6%E9%97%B4)
- [技术预研](#%E6%8A%80%E6%9C%AF%E9%A2%84%E7%A0%94)
- [BFF层](#bff%E5%B1%82)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Node.js 构建极客时间
- 列表页
  - 打通前后台
  - 服务端渲染
- 详情页
  - 网页路由
  - 异步加载
- 播放页
  - API服务器

### 技术预研
- 先把整个技术拆解成为`模块`
- 单个模块逐一`TDD`, **技术难点**要占用更多时间

### BFF层
- 介于`前端`跟`后端`之间的一层
- 客户端跟`前端`的通讯建立在`HTTP`协议上
- 跟前端的通讯建立在`TCP`协议上
- 跟`后端`的通讯建立在`TCP`协议上