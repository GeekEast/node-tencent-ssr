<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [RPC](#rpc)
- [RPC vs AJAX](#rpc-vs-ajax)
- [二进制协议 vs 文本协议](#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%8D%8F%E8%AE%AE-vs-%E6%96%87%E6%9C%AC%E5%8D%8F%E8%AE%AE)
- [RPC](#rpc-1)
- [Buffer](#buffer)
- [Buffer的实现库](#buffer%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%BA%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### RPC
- Remote Procedure Call
- 服务器跟另外一个服务器的通信

### RPC vs AJAX
- 相同点
  - 都是两个`计算机`之间的网络通信
  - 都是双方约定的一个`数据格式`
- 不同点
  - 不一定适用**DNS**寻址, 会使用`二进制`通信，有性能优势; 寻址是传递的不是网址，是个自己设计的ID
  - 应用层一般不用**HTTP**
  - 基于**TCP**或者UDP协议

### 二进制协议 vs 文本协议
- 在服务端与服务端之间，会使用二进制协议，提高传输性能
  - 更小的数据包体积
  - 更快的编解码速率
  - 
### RPC
- 回顾
  - 非DNS寻址
  - 二进制编码

### Buffer
- 在nodejs中使用Buffer来实现二进制数据的编解码
- 处理octet streams in TCP streams

### Buffer的实现库
- Google Protocol Buffer
- npm protocol-buffers