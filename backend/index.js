import express from "express"
import morgan from 'morgan'
import cors from "cors"
import { helloHandler } from "./handlers/hello.js"
import { stateHandler } from "./handlers/state.js"  
import { getPlayersHandler } from "./handlers/getPlayers.js"
import { addPlayerhandler } from "./handlers/addPlayer.js"
import { startNewRoundWithRandomQuestion } from "./handlers/startNewRoundWithRandomQuestion.js"
import { makeGuessHandler} from "./handlers/makeGuess.js"
import { getCurrentRoundHandler } from "./handlers/getCurrentRound.js"
import { getCurrentRoundAnswersHandler} from "./handlers/getCurrentRoundAnswers.js"

const app = express()

app.use(cors())
app.use(express.json())   // parsing json on request
app.use(morgan('dev'))

app.get("/hello", helloHandler)
app.get("/state", stateHandler)
app.get("/players", getPlayersHandler)
app.post("/players", addPlayerhandler)
app.post("/round/start/randomquestion", startNewRoundWithRandomQuestion)
app.get("/round/current", getCurrentRoundHandler)
app.get("/round/current/answers", getCurrentRoundAnswersHandler)
app.post("/guess", makeGuessHandler)

console.log("Launching app on port 3331")
app.listen(3331)


