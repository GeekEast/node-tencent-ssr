const { getRandom, getResult } = require("./lib");
const playerAction = process.argv[process.argv.length - 1];
console.log(getResult(getRandom(), playerAction));

let count = 0;
process.stdin.on('data', (e) => {
  const playerAction = e.toString().trim();
  const result = getResult(getRandom(), playerAction)
  console.log('Result:', result);
  if (result === "win") count++;
  if (count > 2) process.exit();
})