import { gameState } from "../gameState/index.js"


export const getPlayersHandler = (req, res) => {
    gameState.players.sort( (a,b) => {
        return b.points - a.points
    })
    res.status(200).send(gameState.players)
}