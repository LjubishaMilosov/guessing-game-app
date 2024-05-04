import { gameState } from "../gameState/index.js"
import { v4 as uuidv4 } from "uuid"

export const startNewRoundWithRandomQuestion = (request, response) => {
    const newRound = {
        id: uuidv4(),
        questionId: "star-wars-release-date",
    }

    gameState.rounds.push(newRound)

    return response.status(200).send(newRound)
}