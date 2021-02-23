const express = require("express");
const getPokemon = require("../controller/pokemonController")

const router = express.Router();

router.get('/:id', getPokemon);

module.exports = router;


