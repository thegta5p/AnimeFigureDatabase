const exprees = require('express');
const router = exprees.Router();
const Character = require('../models/Character');

router.post('/add', async (req, res) => {
    const {name, series, about, image, age} = req.body;
    try {
        const newCharacter = new Character({name, series, about, image, age});
        const character = await newCharacter.save();
        res.status(201).json(character);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
});

module.exports = router;