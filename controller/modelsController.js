const readFile = require("../utilities/index")

const getPokemons= () => {
    return readFile();
}

const getPokemon = (pokemonId) => {
    const pokemons = getPokemons();
    const memebr = pokemons.find((Pokemon) => Pokemon.id == pokemonId);
    return memebr;
};

const searchPokemon = (pokemonName) => {
    const pokemons = getPokemons();
    const memebr = pokemons.find((Pokemon) => Pokemon.name.english.toLowerCase() == pokemonName.toLowerCase());
    return memebr;
};

const pokemonController = {
    getPokemon,
    searchPokemon
}
module.exports = pokemonController;