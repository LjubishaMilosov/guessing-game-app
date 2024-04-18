console.log("Welcome to my app");

const playerOne = "Jim";
const playerTwo = "Jessica";

const gameState = {
  gameName: "Our amazing game",
  copyrightYear: "2024",
  players: [],
};

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



