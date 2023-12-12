const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello from backend")
})

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`)
})