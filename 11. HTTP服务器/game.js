function generateRandom() {
  const rand = 3 * Math.random()
  if (rand < 1) return 'rock';
  if (rand > 2) return 'scissor';
  return 'cloth';
}

function getResult(userInput) {
  const random = generateRandom();
  if (random === "rock") {
    if (userInput === "rock") return "tie";
    if (userInput === "scissor") return "lose";
    if (userInput === "cloth") return "win";
    return "Please enter right user Input";
  }

  if (random === "scissor") {
    if (userInput === "rock") return "win";
    if (userInput === "scissor") return "tie";
    if (userInput === "cloth") return "lose";
    return "Please enter right user Input";
  }

  if (random === "cloth") {
    if (userInput === "rock") return "lose";
    if (userInput === "scissor") return "win";
    if (userInput === "cloth") return "tie";
    return "Please enter right user Input";
  }
  return "Please enter right random"
}

module.exports = getResult;