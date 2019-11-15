const eventloop = {
  queue: [],
  loop() {

    while (this.queue.length > 0) {
      let callback = this.queue.shift();
      callback();
    }

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









