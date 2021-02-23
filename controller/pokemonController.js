const getPoke = require("./modelsController");

const getPokemon = (req, res) => {
    const pokemon = getPoke(req.params.id)
    if (pokemon) {
        res.status(200).json((pokemon));
    } else {
        res.status(400).json({ msg: 'pokemon not found' });
    }
};
 
module.exports = getPokemon;
