const express = require("express");
const pokemonController = require("../controller/pokemonController")

const router = express.Router();

router.get('/:id', pokemonController.getPokemon);
router.get('/search/:name', pokemonController.searchPokemon);

module.exports = router;


