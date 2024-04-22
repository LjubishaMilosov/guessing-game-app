const { gameState } = require("./gameState.js")
const { gatherResults } = require("./gatherResults.js")


const calculateFinalResults = () => {
    gameState.rounds.forEach((round, index) => {
            const  roundResults = gatherResults(index)
            console.log(roundResults, index)

    })


}

module.exports = {
    calculateFinalResults
}