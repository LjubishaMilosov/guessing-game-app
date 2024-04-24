const { gameState } = require ("./gameState.js");
const { startRound } = require("./startRound.js");
const { makeGuess } = require("./makeGuess.js");
const { addPlayer, removeLatestAddedPlayer } = require("./players.js");
const { gatherResults } = require("./gatherResults.js");
const { calculateFinalResults } = require("./calculateFinalResults.js");
const prompts = require('prompts');


const gatherPlayerGuess = async () => {
  const promptInput = await prompts({
  
      type: 'number',
      name: 'guess',
      message: 'What is your guess?',
    
})
  return promptInput.guess
}

const main = async () => {
  console.log("Welcome to my app");

const response = await prompts([
  {
    type: 'text',
    name: 'playerOne',
    message: 'What is your name, playerOne?',
  },
  {
    type: 'text',
    name: 'playerTwo',
    message: 'What is your name, playerTwo?',
  }
])

console.log("response from prompt", response)

const playerOne = response.playerOne;
const playerTwo = response.playerTwo;

const welcomePlayer = (playerName) => {
  console.log(`Hello, welcome to our game ${playerName}`);
};

welcomePlayer(playerOne);
welcomePlayer(playerTwo);

addPlayer(playerOne);
addPlayer(playerTwo);
addPlayer("The person with bad internet");

console.log(`Players after adding ${gameState.players}`);



const playerThatWasRemoved = removeLatestAddedPlayer();
console.log(`Player that was removed ${playerThatWasRemoved}`);


console.log(`Players after removing ${gameState.players}`);

console.log(`The copyright year is ${gameState.copyrightYear}`);
console.log(`The name of the game is ${gameState.gameName}`);
console.log(`The players names are ${gameState.players}`);

startRound(0)
const playerOneRoundZeroGuess = await gatherPlayerGuess();
const playerTwoRoundZeroGuess = await gatherPlayerGuess();
makeGuess(0,playerOne, playerOneRoundZeroGuess)
makeGuess(0, playerTwo, playerTwoRoundZeroGuess)
const firstRoundResults = gatherResults(0);
console.log(JSON.stringify(firstRoundResults, undefined, 2))

startRound(1)
const playerOneRoundOneGuess = await gatherPlayerGuess();
const playerTwoRoundOneGuess = await gatherPlayerGuess();
makeGuess(1, playerOne, playerOneRoundOneGuess)
makeGuess(1, playerTwo, playerTwoRoundOneGuess)
const seconsRoundResults = gatherResults(1);
console.log(JSON.stringify(seconsRoundResults, undefined, 2))

startRound(2)
const playerOneRoundTwoGuess = await gatherPlayerGuess();
const playerTwoRoundTwoGuess = await gatherPlayerGuess();
makeGuess(2, playerOne, playerOneRoundTwoGuess)
makeGuess(2, playerTwo, playerTwoRoundTwoGuess)
const thirdRoundResults = gatherResults(2);
console.log(JSON.stringify(thirdRoundResults, undefined, 2))

const finalResults = calculateFinalResults()
console.log(finalResults)

}

main()

