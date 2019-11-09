const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 3000)
  })
  return promise;
}


const run = async () => {
  await fetchData().then(console.log).catch((err) => console.log(err));
}
run();




















// const run = async () => {

// }

// const main = async () => {
//   await run();
// }

// main();




