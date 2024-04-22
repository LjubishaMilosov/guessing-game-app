const { gameState } = require("./gameState.js")
const { gatherResults } = require("./gatherResults.js")


const calculateFinalResults = () => {
    const results = {}

    gameState.rounds.forEach((round, index) => {
            const  roundResults = gatherResults(index)
            console.log(roundResults, index)

            const playerNames = Object.keys(roundResults)

            playerNames.forEach((player) => {
                if(results[player] === undefined) {
                    results[player] = roundResults[player]
                } else {
                    results[player] = results[player] + roundResults[player]
                }
            })

    })
    return results

}

module.exports = {
    calculateFinalResults
}