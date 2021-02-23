const express = require("express");
const app = express();
const data = require("./pokemon.json")

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("hollla")
});

app.get("/pokemon", (req, res) => {
    res.send(data)
});

app.listen(port, () => {
    console.log("listining " +port)
})