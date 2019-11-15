const buffer1 = Buffer.from('geekbang');

const buffer2 = Buffer.from([1, 2, 3, 4]);

// 可以指定buffer的长度, 但是内容为空
const buffer3 = Buffer.alloc(20);
buffer3.writeInt8(12, 1)

console.log(buffer1, buffer2, buffer3)