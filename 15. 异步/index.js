function interview() {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (Math.random() < 0.2) {
          resolve(null, "success")
        } else {
          reject(new Error("fail"));
        }
      }
      , 500);
  }
  )
};


interview()
  .then(() => interview()).catch(err => console.log('1 failed'))
  .then(() => interview()).catch(err => console.log('2 failed'))
  .then(() => interview()).catch(err => console.log('3 failed'));





// const run = async () => {
//   let count = 0;
//   await new Promise(() => {
//     console.log('Start Promise')
//     interview((err) => {
//       if (err) {
//         return console.log('cry');
//       }
//       count++;
//     })
//   });

//   await new Promise(() => {
//     console.log('Start Promise')
//     interview((err) => {
//       if (err) {
//         return console.log('cry');
//       }
//       count++;
//     })
//   });
//   console.log('here');
//   console.log(count);
// }

// run();
