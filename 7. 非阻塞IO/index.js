const glob = require('glob');

// //  获取当前文件夹下所有文件的路径
// let result = null;
// console.time('glob');
// result = glob.sync(__dirname + '/**/*');
// console.timeEnd('glob')
// console.log(result);


let result = null;
console.time('glob');
glob(__dirname + "/**/*", (err, res) => {
  result = res;
  // console.log(result);
  console.log('got result');
});
console.timeEnd('glob');
console.log(1 + 1);