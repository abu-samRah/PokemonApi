const express = require("express");
const cors  = require('cors');
const pokemonRouter = require("../routes/pokemon")
const app = express();

let port = process.env.PORT || 3000;
app.use(cors()); // <---- use cors middleware
app.get("/", (req, res) => {
    res.send("Welcome to Pokemons API, use the following links  1- https://samrah-api-poke.herokuapp.com/pokemon/search/PokemonName : to search for a pokemmon 2- https://samrah-api-poke.herokuapp.com/pokemon/PokemonID to get a pokemon by its id")
});

app.use("/pokemon", pokemonRouter);

app.listen(port, () => {
    console.log("listining " +port)
})