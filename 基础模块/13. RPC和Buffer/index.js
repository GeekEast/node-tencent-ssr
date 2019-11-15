const buffer1 = Buffer.from('geekbang');

const buffer2 = Buffer.from([1, 2, 3, 4]);

// 可以指定buffer的长度, 但是内容为空
const buffer3 = Buffer.alloc(20);
// 8占一个长度， 16占两个长度
buffer3.writeInt8(12, 1)
// LE头靠前，BE头靠后
buffer3.writeInt16LE(12, 2)



const fs = require('fs');
const protobuf = require('protocol-buffers');
const schema = protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'));

// 编码
const buffer = schema.Column.encode({
  id: 1,
  name: 'node.js',
  price: 80.4
})
console.log(buffer);

// 解码
console.log(schema.Column.decode(buffer));



