import express from 'express';
import controller from '../controller/pokemonController';

const router = express.Router();

router.get('/:id', controller.getPokemon);

export = router;
