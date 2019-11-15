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