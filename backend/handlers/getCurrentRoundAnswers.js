import { response } from "express";
import { gameState } from "../gameState/index.js";
import { questions } from "../questions.js"

export const getCurrentRoundAnswersHandler = (request, response) => {
    if(gameState.rounds.length === 0){
        response.status(404).send({
            message: "The game hasn't started yet"
    })
        return
    }

    const currentRound = gameState.rounds[gameState.rounds.length -1]

    const matchingQuestion = questions.find( (question) => {
        return question.id === currentRound.questionId
    })

    if(!matchingQuestion){
        response.status(500).send(
            {
                message: `There was no question with ID ${currentRound.questionId}`
            }
        )
        return
    }
    console.log(matchingQuestion)

    response.status(200).send({
        results: [
            {
                player: "Rick",
                guess: 1975,
                difference: 2,
                points: 5
            }
    ],
        overallGamePoints: gameState.players
    })
    return
}