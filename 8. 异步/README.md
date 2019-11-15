<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [定义](#%E5%AE%9A%E4%B9%89)
- [格式规范](#%E6%A0%BC%E5%BC%8F%E8%A7%84%E8%8C%83)
- [事件循环](#%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF)
- [Callback Hell](#callback-hell)
- [问题](#%E9%97%AE%E9%A2%98)
- [References](#references)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 定义
- 通过`回调函数`编程的方式称为`异步编程`

### 格式规范
- Error-first callback(Node-style callback)

### 事件循环
```javascript
function interview(callback) {
  setTimeout(() => {
    if (Math.random() < 0.8) {
      callback("success")
    } else {
      throw new Error("fail");
    }
  }, 500);
}

//  这个Error并不会被catch抓取，而是会抛到nodejs全局，造成全局崩溃
try {
  interview(() => console.log('smile'))
} catch (err) {
  console.log(err);
}
```
- Correction
```javascript
// 如果想要抓取Error，要在setTimout的callback里面加try-catch，而不是在interview外层
// 这是因为callback在做的时候，已经是在另外一个call stack里面了
function interview(callback) {
  setTimeout(
    () => {
      try {
        if (Math.random() < 0.2) {
          callback("success")
        } else {
          throw new Error("fail");
        }
      } catch (err) {
        console.log(err);
      }
    }
    , 500);
}

interview((text) => console.log(text));
```
- **Or**
```javascript
// 这种方法实现了call stack的沟通，通过callback本身
function interview(callback) {
  setTimeout(
    () => {
        if (Math.random() < 0.2) {
          callback("success")
        } else {
          callback(new Error("fail"));
        }
    }
    , 500);
}

interview((text) => {
  if (text instanceof Error){
    console.log('cry')
  } else {
    console.log('smile')
  }
})
```
- Summary:
  - **异步任务的错误是不能被外面的try-catch捕捉到的**

### Callback Hell
```javascript
function interview(callback) {
  setTimeout(
    () => {
      if (Math.random() < 0.5) {
        callback(null, "success")
      } else {
        callback(new Error("fail"));
      }
    }
    , 500);
}

// 嵌套太多会形成callback hell
// text只会调用第一个传入的参数
interview((res) => {
  if (res) {
    return console.log('Interview 1 Failed.');
  }
  interview((res) => {
    if (res) {
      return console.log('Interview 2 Failed.')
    }
    interview((res) => {
      if (res) {
        return console.log('Interview 3 Failed')
      }
      interview((res) => {
        if (res) {
          return console.log('Interview 4 Failed')
        }
        return console.log('Hire!')
      })
    })
  })
})
```

### 问题
- **回调地狱这个问题如何用Promise和async/await方式来实现呢？**
- 每一个新的事件循环都是一个全新的`Call Stack` 是什么意思？

### References
- [深入理解事件循环和异步流程控制](https://juejin.im/post/5a2e21486fb9a0450407d370)