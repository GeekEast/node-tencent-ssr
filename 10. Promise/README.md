<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

- [使用格式](#%E4%BD%BF%E7%94%A8%E6%A0%BC%E5%BC%8F)
- [并发Promise](#%E5%B9%B6%E5%8F%91promise)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 使用格式
- 可以接多个then
- 最后只接一个catch就可以
```javascript
const promise = new Promise(function(resolve, reject) => {
  if (..) resolve();
  if (..) reject();
})
promise.then(func1).catch(func2);
```


### 并发Promise
```javascript
Promise.all([interview(), interview()]).then(data => console.log('Both Succeeded')).catch(console.log);
```