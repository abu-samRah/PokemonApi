const express = require("express");
const app = express();
const data = require("./pokemon.json")
const pokemons = require("./utilities/index")

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("holas")
});

app.get("/pokemon", (req, res) => {
    res.send(pokemons())
});

app.listen(port, () => {
    console.log("listining " +port)
})