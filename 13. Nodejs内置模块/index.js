const EventEmitter = require('events').EventEmitter;

class Geektime extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('newLession', { price: Math.random() * 100 })
    }, 3000)
  }
}

const geektime = new Geektime();
geektime.addListener('newLession', (event) => console.log(event))