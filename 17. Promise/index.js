// callback 改造成promise函数
function interview() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (Math.random() > 0.1) { resolve('success') }
      else { reject(new Error('fail')) };
    }, 200);
  })
}

// 并发控制
Promise.all([interview(), interview()]).then(data => console.log('Both Succeeded')).catch(console.log);



