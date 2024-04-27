import express from "express"
import { helloHandler } from "./handlers/hello.js"
import { stateHandler } from "./handlers/state.js"  
import { getPlayersHandler } from "./handlers/getPlayers.js"
import { addPlayerhandler } from "./handlers/addPlayer.js"

const app = express()

app.use(express.json())   // parsing json on request

app.get("/hello", helloHandler)
app.get("/state", stateHandler)
app.get("/players", getPlayersHandler)
app.post("/players", addPlayerhandler)

console.log("Launching app on port 3331")
app.listen(3331)


