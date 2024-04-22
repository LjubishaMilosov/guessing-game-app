const { gameState } = require ("./gameState.js");
const { startRound } = require("./startRound.js");
const { makeGuess } = require("./makeGuess.js");
const { addPlayer, removeLatestAddedPlayer } = require("./players.js");
const { gatherResults } = require("./gatherResults.js");

console.log("Welcome to my app");

const playerOne = "Jim";
const playerTwo = "Jessica";

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
makeGuess(0,playerOne, 1969)
makeGuess(0, playerTwo, 1978)
console.log(JSON.stringify(gameState, undefined, 2));
const firstRoundResults = gatherResults(0);
console.log(JSON.stringify(firstRoundResults, undefined, 2))

startRound(1)
makeGuess(1, playerOne, 850)
makeGuess(1, playerTwo, 300)
console.log(JSON.stringify(gameState, undefined, 2));
const seconsRoundResults = gatherResults(1);
console.log(JSON.stringify(seconsRoundResults, undefined, 2))

startRound(2)
makeGuess(2, playerOne, 600)
makeGuess(2, playerTwo, 800)
console.log(JSON.stringify(gameState, undefined, 2));
const thirdRoundResults = gatherResults(2);
console.log(JSON.stringify(thirdRoundResults, undefined, 2))