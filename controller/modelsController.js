const readFile = require("../utilities/index")

const getPokemons= () => {
    return readFile();
}

const getPokemon = (pokemonId) => {
    const pokemons = getPokemons();
    const memebr = pokemons.find((Pokemon) => Pokemon?.id == pokemonId);
    return memebr;
};

module.exports = getPokemon;