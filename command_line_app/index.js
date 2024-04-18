console.log("Welcome to my app");

const playerOne = "Jim";
const playerTwo = "Jessica";

const gameState = {
  gameName: "Our amazing game",
  copyrightYear: "2024",
  players: [],
  rounds: [],
};

const questions = [
{
  prompt: "What year was the first Star Wars movie released?",
  answer: 1977,
},
{
  prompt: "At the year of release, Titanic(1977) was the most expensive movie ever made. How much did it cost to produce in US dollars?",
  answer: 210000000,
},
{
  prompt: "How many people did Arnold Schwarzeneger kill on screen in all of his movies combined? (Data by alloutabubb.com)",
  answer: 895,
}
]

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

const makeGuess = (roundNumber, playerName, guess) => {
  if (!gameState.rounds[roundNumber]) {
  throw new Error("Dummy error inside makeGuess()");
  }
  gameState.rounds[roundNumber].guesses.push({
    player: playerName,
    guess: guess,
  })
}

const addPlayer = (player) => {
  gameState.players.push(player);
};

const removeLatestAddedPlayer = () => {
    return gameState.players.pop();
    
  };

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

console.log(gameState.rounds)
console.log(gameState.rounds[0])