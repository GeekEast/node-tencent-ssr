<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [如何学习框架](#%E5%A6%82%E4%BD%95%E5%AD%A6%E4%B9%A0%E6%A1%86%E6%9E%B6)
- [Express vs KOA](#express-vs-koa)
- [Koa](#koa)
- [总结](#%E6%80%BB%E7%BB%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 如何学习框架
- 了解它的关键功能
- 推导出它要解决的问题是什么，或者说痛点

### Express vs KOA
- express 对于异步的支持较弱
- Koa是在express之后的新框架，解决了很多express的缺陷,还是原来的作者写的

### Koa
- 砍掉了路由, 需要`koa-mount`作为补充
- 完美支持洋葱模型，类似于递归
- 用中间件的思路来封装功能，中间件类似于function programming

### 总结
- 需要做一个koa的项目
- koa之所以出现，是为了让next()能够等待，以实现洋葱模型（递归）