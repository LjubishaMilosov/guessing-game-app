import express from "express"

const app = express()

app.get("/hello", (req, res) => {
    res.status(404).send("hello from our first app")
})

console.log("Launching app on port 3331")
app.listen(3331)