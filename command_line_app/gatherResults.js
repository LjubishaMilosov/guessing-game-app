const { gameState } = require("./gameState.js");


const gatherResults = (roundNumber) => {
    const round = gameState.rounds[roundNumber]

    if(! round) {
        throw new Error(`No round found for roundNumber: ${roundNumber}`)
    }

    if(round.guesses.length === 0) {
        throw new Error(`No results found for roundNumber: ${roundNumber}`)
    }   

    return {
        "Jim": 100,
        "Jessica": 400,
    }
}

module.exports = {
    gatherResults
}