import { gameState } from "../gameState/index.js"

export const makeGuessHandler = (request, response) => {
    if(gameState.rounds.length === 0) {
        response.status(400).send({message: "No round has been started yet."})
        return
    }

    if(!request.body.player){
        response.status(400).send({message: "No 'Player' property sent"})
        return
    }

    if(!request.body.guess) {
        response.status(400).send({messae: "No 'Guess' property sent"})
        return
    }
}