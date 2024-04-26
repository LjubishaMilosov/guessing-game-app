const express = require("express")

const app = express()

app.get("/hello", (req, res) => {
    res.status(404).send("hello from our first app")
})

app.listen(3331)