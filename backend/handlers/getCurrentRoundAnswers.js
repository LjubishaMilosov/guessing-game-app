import { response } from "express";
import { gameState } from "../gameState/index.js";

export const getCurrentRoundAnswersHandler = (request, response) => {
    if(gameState.rounds.length === 0){
        response.status(404).send({
            message: "The game hasn't started yet"
    })
        return
    }

    response.status(200).send({
        results: [
            {
                player: "Rick",
                guess: 1975,
                difference: 2,
                points: 5
            }
    ],
        overallGamePoints: [
            {
                name: "Rick",
                points: 10
            },
            {
                name: "Jenny",
                points: 5
            }
        ]
    })

}