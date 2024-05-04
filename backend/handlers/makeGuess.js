import { gameState } from "../gameState/index.js"

export const makeGuessHandler = (request, response) => {
    if(gameState.rounds.length === 0) {
        response.status(400).send({message: "No round has been started yet."})
        return
    }

    if(! request.body.player){
        response.status(400).send({message: "No 'Player' property sent"})
        return
    }

    if(request.body.guess === undefined) {
        response.status(400).send({messae: "No 'Guess' property sent"})
        return
    }

    const currentRoundId = gameState.rounds[gameState.rounds.length -1].id

    if(! gameState.guesses[currentRoundId]) {
        gameState.guesses[currentRoundId] = []
    }

    gameState.guesses[currentRoundId].push({
        player: request.body.player,
        guess: request.body.guess
    })

    response.status(201).send(gameState)

}