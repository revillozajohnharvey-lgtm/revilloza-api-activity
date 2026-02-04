const mongoose = require('mongoose');
const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['Starters', 'Main', 'Dessert', 'Drinks'],
        required: true,
    }, 
    isVegetarian: {
        type: Boolean,
        default: false,
    },
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;