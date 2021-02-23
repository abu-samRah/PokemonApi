import { NextFunction, Request, Response } from 'express';

import { objResponse } from '../config/responses';
import config from '../config/config';
import modelsController from '../controller/modelsController';

const getPokemon = (req: Request, res: Response, next: NextFunction) => {
    const pokemon = modelsController.getPokemon(req.params.id);
    if (pokemon) {
        res.status(config.SUCCESS_STATUS).json(objResponse(pokemon));
    } else {
        res.status(config.ERROR_STATUS).json({ msg: 'pokemon not found' });
    }
};

export default { getPokemon };
