<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table Of Content

  - [Interview Questions](#interview-questions)
  - [`this` in Javascript](#this-in-javascript)
  - [Very simple Event Loop](#very-simple-event-loop)
- [References](#references)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Interview Questions
- Why the result is always **6**?
```javascript
for (var i = 1; i <= 5; i++) {
  console.log(i);
  setTimeout(function test() {
    console.log(i) // 依次输出：6 6 6 6 6
  }, i * 1000);
}
```

### `this` in Javascript
- `this` reference the execution context for that call, d**etermined entirely by how the function was called**.
- Priority
  - `new`
  - `call()`, `apply()`, `bind()`
  - `context object`
  - `global` or `undefined`(strict mode)
- Arrow Function
  - it just look for this upwards the context util the first found
  - only use when you need `lexical` **this**.

### Very simple Event Loop
```javascript
const eventloop = {
  queue: [],
  loop() {
    // console.log(!!this.queue.length);
    while (this.queue.length > 0) {
      let callback = this.queue.shift();
      callback();
    }
    // 保持运行状态
    setTimeout(this.loop.bind(this), 50);
  },
  add(callback) {
    this.queue.push(callback);
  }
}

// 启动 loop
eventloop.loop();

// 加入一个callback
setTimeout(() => {
  eventloop.add(() => console.log(1))
}, 500);

// 加入来另外一个callback
setTimeout(() => {
  eventloop.add(() => console.log(2))
}, 800);
```

## References
- [Javascript Run Time](https://medium.com/@olinations/the-javascript-runtime-environment-d58fa2e60dd0)
- [How a C compilter implements exception handling?](https://www.codeproject.com/Articles/2126/How-a-C-compiler-implements-exception-handling)