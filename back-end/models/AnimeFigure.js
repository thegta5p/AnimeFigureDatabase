const mongoose = require('mongoose');

const AnimeFigureSchema = new mongoose.Schema({
    name: {type: String, required: true},
    character: {type: String, required: true},
    series: {type: String, required: true},
    scale: {type: String, required: false},
    price: {type: Number, required: false},
    releaseDate: {type: Date, required: false},
    image: {type: String, required: false},
});

const AnimeFigure = mongoose.model('AnimeFigure', AnimeFigureSchema);

module.exports = AnimeFigure;