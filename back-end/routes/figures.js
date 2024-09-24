const express = require('express');
const router = express.Router();
const AnimeFigure = require('../models/AnimeFigure');

router.post('/add', async (req, res) => {
    const {name, character, series, scale, price, releaseDate, image} = req.body;

    try {
        const newFigure = new AnimeFigure({name, character, series, scale, price, releaseDate, image});
        const figure = await newFigure.save();
        res.status(201).json(figure);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

module.exports = router;