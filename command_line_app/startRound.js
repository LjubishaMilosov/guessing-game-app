const { gameState } = require('./gameState.js')
const { readQuestions } = require("./questions.js");

const startRound = async (roundNumber) => {
    console.log(`\n--- Round ${roundNumber} ---`);
    console.log(`And here's your question!`);
    const questions = await readQuestions();
    const specificQuestion = questions[roundNumber]
    console.log(specificQuestion.prompt);
  
    gameState.rounds.push({
      guesses: [],
      question: specificQuestion,
    });
  }

  module.exports = { startRound }