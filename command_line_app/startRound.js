const { gameState } = require('./gameState.js')
const { questions } = require("./questions.js");

const startRound = (roundNumber) => {
    console.log(`\n--- Round ${roundNumber} ---`);
    console.log(`And here's your question!`);
    const specificQuestion = questions[roundNumber]
    console.log(specificQuestion.prompt);
  
    gameState.rounds.push({
      guesses: [],
      question: specificQuestion,
    });
  }

  module.exports = { startRound }