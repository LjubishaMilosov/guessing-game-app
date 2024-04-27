import express from "express"
import { helloHandler } from "./handlers/hello.js"
import { stateHandler } from "./handlers/state.js"  

const app = express()

app.get("/hello", helloHandler)

console.log("Launching app on port 3331")
app.listen(3331)

app.get("/state", stateHandler)
