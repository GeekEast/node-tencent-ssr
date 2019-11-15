<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [Koa](#koa)
- [总结](#%E6%80%BB%E7%BB%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Koa
- 砍掉了路由, 需要`koa-mount`作为补充
- 完美支持洋葱模型，类似于递归
- 用中间件的思路来封装功能，中间件类似于function programming

### 总结
- 需要做一个koa的项目
- koa之所以出现，是为了让next()能够等待，以实现洋葱模型（递归）