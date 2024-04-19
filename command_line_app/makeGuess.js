const { gameState } = require("./gameState.js");

const makeGuess = (roundNumber, playerName, guess) => {
    if (!gameState.rounds[roundNumber]) {
    throw new Error("Dummy error inside makeGuess()");
    }
    gameState.rounds[roundNumber].guesses.push({
      player: playerName,
      guess: guess,
    })
  }

  module.exports = { makeGuess }