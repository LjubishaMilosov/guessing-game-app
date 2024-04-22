const { gameState } = require("./gameState.js");


const gatherResults = (roundNumber) => {
    const round = gameState.rounds[roundNumber]

    if(! round) {
        throw new Error(`No round found for roundNumber: ${roundNumber}`)
    }

    if(round.guesses.length === 0) {
        throw new Error(`No results found for roundNumber: ${roundNumber}`)
    }   

    const results = {}

    for(let i = 0; i < round.guesses.length; i++) {
        const guess = round.guesses[i]

        const offFromSolution = Math.abs(round.question.answer - guess.guess)

        results[guess.player] = offFromSolution
        
        
    }
    return results
}



module.exports = {
    gatherResults
}