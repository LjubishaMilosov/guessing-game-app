import { gameState } from "../gameState/index.js"


export const getPlayersHandler = (req, res) => {
    res.status(200).send(gameState.players)
}