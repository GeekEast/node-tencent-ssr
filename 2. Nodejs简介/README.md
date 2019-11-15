<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [简介](#%E7%AE%80%E4%BB%8B)
  - [基于v8引擎的JS运行环境](#%E5%9F%BA%E4%BA%8Ev8%E5%BC%95%E6%93%8E%E7%9A%84js%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83)
  - [事件驱动，非阻塞I/O](#%E4%BA%8B%E4%BB%B6%E9%A9%B1%E5%8A%A8%E9%9D%9E%E9%98%BB%E5%A1%9Eio)
- [应用](#%E5%BA%94%E7%94%A8)
  - [腾讯视频SSR](#%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91ssr)
  - [构建工作流](#%E6%9E%84%E5%BB%BA%E5%B7%A5%E4%BD%9C%E6%B5%81)
  - [开发工具](#%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 简介
### 基于v8引擎的JS运行环境
- 控制**浏览器**：nodejs无浏览器api，如document，windows等; 
- 控制**计算机**：加了许多node本身的api, 可以跟计算机进行交互；
### 事件驱动，非阻塞I/O
- **暂时不懂，没关系**

## 应用
### 腾讯视频SSR
- 需求
  - **搜索引擎**优化
  - **首屏速度**优化
- 技术
  - 服务端渲染(**SSR**) -> 中间层
  - 前后端同构-前后端代码复用(**相同渲染逻辑**) -> NodeJS
### 构建工作流
- `gulp` 
- `webpack`
### 开发工具
- Example: `Visual Studio Code`
  - `Electron`: 封装chrome和node
    - 在chrome里跑node
    - 在node里面跑chrome
- Example: **Wayyard**
  - 赋予用户自定义模块的能力
  - JS足够灵活，开发者多
- Example: **twich.tv**
  - 网页和客户端一模一样
  - Electron可以最大限度实现复用