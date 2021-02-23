import { readFile } from '../utilities/index';
import { Pokemon } from '../config/types';

const getPokemons = (): Pokemon[] => {
    return <Pokemon[]>readFile('source/data/pokemon.json');
};

const getPokemon = (pokemonId: string): Pokemon => {
    const pokemons: Pokemon[] = getPokemons();
    const memebr: Pokemon = pokemons.find((Pokemon) => Pokemon?.id == pokemonId);
    return memebr;
};
const modelsController = {
    getPokemon
};

export default modelsController;
