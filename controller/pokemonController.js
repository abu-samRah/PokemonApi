const pokemoncontroller = require("./modelsController");

const getPokemon = (req, res) => {
    const pokemon = pokemoncontroller.getPokemon(req.params.id)
    if (pokemon) {
        res.status(200).json((pokemon));
    } else {
        res.status(400).json({ msg: 'pokemon not found' });
    }
};

const searchPokemon = (req, res) => {
    const pokemon = pokemoncontroller.searchPokemon(req.params.name)
    if (pokemon) {
        res.status(200).json((pokemon));
    } else {
        res.status(400).json({ msg: 'pokemon not found' });
    }
}

const pokemonController = {
    getPokemon,
    searchPokemon
}
 
module.exports = pokemonController;
