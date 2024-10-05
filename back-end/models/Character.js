const mongoose = require('mongoose');

const CharacterScehma = new mongoose.Schema({
    name: {type: String, required: true},
    series: {type: String, required: true},
    about: {type: String, required: false},
    image: {type: String, required: false},
    age: {type: Number, required: false},
});

const Character = mongoose.model('Character', CharacterScehma);

module.exports = Character;