<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [课程介绍](#%E8%AF%BE%E7%A8%8B%E4%BB%8B%E7%BB%8D)
  - [腾讯视频node.js改造](#%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91nodejs%E6%94%B9%E9%80%A0)
  - [Nodejs优势](#nodejs%E4%BC%98%E5%8A%BF)
  - [Nodejs使用难点](#nodejs%E4%BD%BF%E7%94%A8%E9%9A%BE%E7%82%B9)
  - [课程设计](#%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1)
- [内容综述](#%E5%86%85%E5%AE%B9%E7%BB%BC%E8%BF%B0)
  - [第一章 课程背景](#%E7%AC%AC%E4%B8%80%E7%AB%A0-%E8%AF%BE%E7%A8%8B%E8%83%8C%E6%99%AF)
  - [第二章 技术预研](#%E7%AC%AC%E4%BA%8C%E7%AB%A0-%E6%8A%80%E6%9C%AF%E9%A2%84%E7%A0%94)
  - [第三章 项目开发](#%E7%AC%AC%E4%B8%89%E7%AB%A0-%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91)
  - [第四章 性能调优](#%E7%AC%AC%E5%9B%9B%E7%AB%A0-%E6%80%A7%E8%83%BD%E8%B0%83%E4%BC%98)
  - [第五章 工程化及框架](#%E7%AC%AC%E4%BA%94%E7%AB%A0-%E5%B7%A5%E7%A8%8B%E5%8C%96%E5%8F%8A%E6%A1%86%E6%9E%B6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
## 课程介绍
### 腾讯视频node.js改造
- **2015**年开始进行**整站**技术改造
- Node.js构建介于**后台**服务和**浏览器**前端之间的**中间层**， 即**SSR**
- 效果：
  - 提高`搜索引擎抓取网页`的效果
  - 提高网页`首屏`速度
- 困难：
  - Nodejs程序运行`不稳定`
  - Nodejs程序运行`效率低`
  - 前端同学对服务端`不熟悉`，培训困难, 难以推广
- 解决：
  - 根据网站特点进行分析
  - 开发全新`定制化`的nodejs**框架**
- 结果：
  - 2年内整站覆盖


### Nodejs优势
- 完全开源，**社区**强大
- 广泛用于**Web服务**，开发工作流，客户端应用
- 在web服务层，通常被作为Backend for Frontend(**BFF**)层使用, 专门为前端应用提供后端数据
  - 不需要太强的服务运算能力，但对灵活性有很高的要求，nodejs很适合
- BFF层优势
  - 让前端有能力`自由组装`后台数据 -> 减少业务`沟通`成本 -> 加快业务迭代速度
  - 前端工程师能够自主决断与后台通讯的方式，能够更加集中于Web应用的性能优化
  - 减少后端及运维后续工作量，大大增加在架构领域的知识经验
  - Javascript本身让前端工程师更加容易上手, 涉足数据库，操作系统, 人工智能等等技术领域

### Nodejs使用难点
- 除了javascript，跟前端毫无交集
- 数据结构和算法，设计模式在nodejs应用上也有特殊之处
  - **RPC**调用
  - **进程**管理


### 课程设计
- `技术选型`
- `项目开发`
- `项目维护`
- `性能优化`
- 结果
  - **宏观视角**
  - **核心技能**


## 内容综述
### 第一章 课程背景
- nodejs背景及现状
- 实践项目介绍

### 第二章 技术预研
- 项目立项之前，什么是技术预研
- 实践项目NodeJs基础用法
  
### 第三章 项目开发
- 一步一步实现项目
- 问题及解决方案
  
### 第四章 性能调优
- 性能排查
- 性能优化

### 第五章 工程化及框架
- 代码抽象形成技术框架