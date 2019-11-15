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







