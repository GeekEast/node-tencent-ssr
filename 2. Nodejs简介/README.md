<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [简介](#%E7%AE%80%E4%BB%8B)
  - [chrome v8的js运行环境](#chrome-v8%E7%9A%84js%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83)
  - [事件驱动，非阻塞I/O](#%E4%BA%8B%E4%BB%B6%E9%A9%B1%E5%8A%A8%E9%9D%9E%E9%98%BB%E5%A1%9Eio)
  - [在web方面的应用](#%E5%9C%A8web%E6%96%B9%E9%9D%A2%E7%9A%84%E5%BA%94%E7%94%A8)
    - [腾讯视频SSR](#%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91ssr)
    - [构建工作流](#%E6%9E%84%E5%BB%BA%E5%B7%A5%E4%BD%9C%E6%B5%81)
    - [开发工具](#%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 简介
### chrome v8的js运行环境
- 区别
  - 控制浏览器：nodejs无浏览器api，如document，windows等; 
  - 控制计算机：加了许多node本身的api
### 事件驱动，非阻塞I/O
- 暂时不懂，没关系，用一下javascript里的promise

### 在web方面的应用
#### 腾讯视频SSR
- 需求
  - 搜索引擎优化
  - 首屏速度优化
- 技术
  - 服务端渲染SSR -> 中间层
  - 前后端同构-前后端代码复用 -> NodeJS


#### 构建工作流
- Example: gulp & webpack
- 前端工程师看得懂的工作流


#### 开发工具
- Example: Visual Studio Code
  - Electron: 封装chrome和node
  - 在chrome里跑node
  - 在node里面跑chrome
- Example: Wayyard
  - 赋予用户自定义模块的能力
  - JS足够灵活，开发者多
- Example: twich.tv
  - 网页和客户端一模一样
  - Electron可以最大限度实现复用