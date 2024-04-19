const { gameState} = require('./gameState');

const addPlayer = (player) => {
    gameState.players.push(player);
  };
  
  const removeLatestAddedPlayer = () => {
      return gameState.players.pop();
      
    };

    module.exports = {
        addPlayer,
        removeLatestAddedPlayer,
    }