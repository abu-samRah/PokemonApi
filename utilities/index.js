const fs = require('fs');

const readFile = () => {
    const rawdata = fs.readFileSync('./pokemon.json');
    const pokemons = JSON.parse(rawdata);
    return pokemons
}

module.exports = readFile;