import { gameState } from "./../gameState/index.js"


export const stateHandler = (req, res) => {
    res.status(200).send(gameState)

}