<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [腾讯视频node.js改造](#%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91nodejs%E6%94%B9%E9%80%A0)
- [Nodejs优势](#nodejs%E4%BC%98%E5%8A%BF)
- [Nodejs使用难点](#nodejs%E4%BD%BF%E7%94%A8%E9%9A%BE%E7%82%B9)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
  - 让前端有能力自由组装后台数据 -> 减少业务沟通成本 -> 加快业务迭代速度
  - 前端工程师能够自主决断与后台通讯的方式，能够更加集中于Web应用的性能优化
  - 减少后端及运维后续工作量，大大增加在架构领域的知识经验
  - javascript本身让前端工程师更加容易上手, 涉足数据库，操作系统, 人工智能等等技术领域

### Nodejs使用难点
- 除了javascript，跟前端毫无交集
- 数据结构和算法，设计模式在nodejs应用上也有特殊之处
  - **RPC**调用
  - **进程**管理


课程设计
- `技术选型`
- `项目开发`
- `项目维护`
- `性能优化`
- 结果
  - **宏观视角**
  - **核心技能**