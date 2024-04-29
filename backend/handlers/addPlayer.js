
import { gameState } from "../gameState/index.js"


export const addPlayerhandler = (req, res) => {
    console.log("inside addPlayerHandler")
    console.log("request body: ", req.body)


    if(!req.body.name){
        res.status(400).send({
            message: "name is required"
        })
        return
    }

    const playerWithSameName = gameState.players.find((player) => {
        return player.name === req.body.name
    })

    if(playerWithSameName){
        res.status(400).send({
            message: `There is already a player with the name '${req.body.name}'`
        })
        return
    }

    gameState.players.push(
        {
            name: req.body.name,
            points: 0,
        })

        res.status(201).send(gameState.players)
        return
}

