import express from "express"
import morgan from 'morgan'
import { helloHandler } from "./handlers/hello.js"
import { stateHandler } from "./handlers/state.js"  
import { getPlayersHandler } from "./handlers/getPlayers.js"
import { addPlayerhandler } from "./handlers/addPlayer.js"
import { startNewRoundWithRandomQuestion } from "./handlers/startNewRoundWithRandomQuestion.js"

const app = express()

app.use(express.json())   // parsing json on request
app.use(morgan('dev'))

app.get("/hello", helloHandler)
app.get("/state", stateHandler)
app.get("/players", getPlayersHandler)
app.post("/players", addPlayerhandler)
app.post("/round/start/randomquestion", startNewRoundWithRandomQuestion)

console.log("Launching app on port 3331")
app.listen(3331)


