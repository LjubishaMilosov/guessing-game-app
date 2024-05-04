import { gameState } from "../gameState/index.js"

export const startNewRoundWithRandomQuestion = (request, response) => {
    const newRound = {
        id: "random-round-id",
        questionId: "star-wars-release-date",
    }

    gameState.rounds.push(newRound)

    return response.status(200).send(newRound)
}