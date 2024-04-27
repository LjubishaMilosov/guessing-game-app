
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

    gameState.players.push(
        {
            name: req.body.name,
            points: 0,
        })

        res.status(201).send(gameState.players)
}

