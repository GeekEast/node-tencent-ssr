<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [TCP](#tcp)
- [单工通讯](#%E5%8D%95%E5%B7%A5%E9%80%9A%E8%AE%AF)
- [半双工通信](#%E5%8D%8A%E5%8F%8C%E5%B7%A5%E9%80%9A%E4%BF%A1)
- [双工通信](#%E5%8F%8C%E5%B7%A5%E9%80%9A%E4%BF%A1)
  - [同时并发会怎样？](#%E5%90%8C%E6%97%B6%E5%B9%B6%E5%8F%91%E4%BC%9A%E6%80%8E%E6%A0%B7)
- [总结](#%E6%80%BB%E7%BB%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## TCP
- 在浏览器端测试是不行的

## 单工通讯
- Client
```javascript
const net = require('net');
const socket = new net.Socket({});
socket.connect({
  host: '127.0.0.1',
  port: 4000
});
// 32 对于4个长度
const buffer = Buffer.alloc(4);
buffer.writeInt32BE('136797');
socket.write(buffer);

socket.on('data', (buffer) => {
  console.log(buffer.toString());
})
```
- Server
```javascript
const net = require('net');
const server = net.createServer((socket) => {
  socket.on('data', (buffer) => {
    const lessonId = buffer.readInt32BE();
    socket.write(
      Buffer.from(data[lessonId])
    )
  })
})
server.listen(4000);

const data = {
  136797: "01 | 课程介绍",
  136798: "02 | 内容综述",
  136799: "03 | Node.js是什么？",
  136800: "04 | Node.js可以用来做什么？",
  136801: "05 | 课程实战项目介绍",
  136803: "06 | 什么是技术预研？",
  136804: "07 | Node.js开发环境安装",
  136806: "08 | 第一个Node.js程序：石头剪刀布游戏",
  136807: "09 | 模块：CommonJS规范",
  136808: "10 | 模块：使用模块规范改造石头剪刀布游戏",
  136809: "11 | 模块：npm",
  141994: "12 | 模块：Node.js内置模块",
  143517: "13 | 异步：非阻塞I/O",
  143557: "14 | 异步：异步编程之callback",
  143564: "15 | 异步：事件循环",
  143644: "16 | 异步：异步编程之Promise",
  146470: "17 | 异步：异步编程之async/await",
  146569: "18 | HTTP：什么是HTTP服务器？",
  146582: "19 | HTTP：简单实现一个HTTP服务器"
}
```

## 半双工通信
- Client
```javascript
const net = require('net');
const socket = new net.Socket({});
socket.connect({
  host: '127.0.0.1',
  port: 4000
})

// 32 对于4个长度
const buffer = Buffer.alloc(4);
buffer.writeInt32BE('136797')
socket.write(buffer);
socket.on('data', (buffer) => {
  console.log(buffer.toString());
  buffer = Buffer.alloc(4)
  buffer.writeInt32BE('136797')
  socket.write(buffer);
})
```
- Server
```javascript
const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (buffer) => {
    const lessonId = buffer.readInt32BE();
    setTimeout(() => {
      socket.write(
        Buffer.from(data[lessonId])
      )
    }, 3000);
  })
})

server.listen(4000);


const data = {
  136797: "01 | 课程介绍",
  136798: "02 | 内容综述",
  136799: "03 | Node.js是什么？",
  136800: "04 | Node.js可以用来做什么？",
  136801: "05 | 课程实战项目介绍",
  136803: "06 | 什么是技术预研？",
  136804: "07 | Node.js开发环境安装",
  136806: "08 | 第一个Node.js程序：石头剪刀布游戏",
  136807: "09 | 模块：CommonJS规范",
  136808: "10 | 模块：使用模块规范改造石头剪刀布游戏",
  136809: "11 | 模块：npm",
  141994: "12 | 模块：Node.js内置模块",
  143517: "13 | 异步：非阻塞I/O",
  143557: "14 | 异步：异步编程之callback",
  143564: "15 | 异步：事件循环",
  143644: "16 | 异步：异步编程之Promise",
  146470: "17 | 异步：异步编程之async/await",
  146569: "18 | HTTP：什么是HTTP服务器？",
  146582: "19 | HTTP：简单实现一个HTTP服务器"
}
```

## 双工通信
- 半双工通信在并发请求下，容易发生前后response无法正确对应的情况
- 双工通信在半双工的基础上做了如下改进
  - 包序号，不会发生req, res对应错误的问题
- Client
```javascript
const net = require('net');
const socket = new net.Socket({});
const LESSON = require('./meta');
const LESSON_IDS = Object.keys(LESSON).map(x => parseInt(x));

const getRandomId = (LESSON_IDS) => LESSON_IDS[Math.floor(Math.random() * LESSON_IDS.length)]

let count = 0;
const encode = (id) => {
  const buffer = Buffer.alloc(6);
  buffer.writeInt16BE(count++, 0);
  buffer.writeInt32BE(id, 2);
  return buffer;
}

socket.connect({
  host: '127.0.0.1',
  port: 4000
});

// 32 对于4个长度
// socket.write(encode(getRandomId(LESSON_IDS)));
socket.on('data', (buffer) => {
  console.log(buffer.toString())
  // socket.write(encode(getRandomId(LESSON_IDS)));
})

setInterval(() => {
  socket.write(encode(getRandomId(LESSON_IDS)))
}, 50)
```
- Server
```javascript
const net = require('net');
const LESSIONS = require('./meta');

const server = net.createServer((socket) => {
  socket.on('data', (buffer) => {
    const count = buffer.slice(0, 2);
    const lessonId = buffer.readInt32BE(2);
    setTimeout(() => {
      const buffer = Buffer.concat([
        count,
        Buffer.from(LESSIONS[lessonId])
      ])
      socket.write(buffer)
    }, 10 + Math.random() * 1000);
  })
})

server.listen(4000);
```

### 同时并发会怎样？
- Client
```javascript
const net = require('net');
const socket = new net.Socket({});
const LESSON = require('./meta');
const LESSON_IDS = Object.keys(LESSON).map(x => parseInt(x));

const getRandomId = (LESSON_IDS) => LESSON_IDS[Math.floor(Math.random() * LESSON_IDS.length)]

let count = 0;
const encode = (id) => {
  const buffer = Buffer.alloc(6);
  buffer.writeInt16BE(count++, 0);
  buffer.writeInt32BE(id, 2);
  return buffer;
}

socket.connect({
  host: '127.0.0.1',
  port: 4000
});

// 32 对于4个长度
socket.on('data', (buffer) => {
  console.log(buffer.toString())

})

for (let i = 0; i < 100; i++) {
  socket.write(encode(getRandomId(LESSON_IDS)))
}

```
- 结果只返回两个这是为什么？
- 是因为tcp底层机制导致，在同时很多包时，会自己动把包进行拼接(粘包)


## 总结
- 全双工
  - 应用层需要有标记
  - 需要有标记包长的字段以处理:
    - 粘包
    - 不完整包
  
