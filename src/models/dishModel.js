const mongoose = require('mongoose');
const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        min:[0, 'Price cannot be a negative'],
        max:[1000, 'Price cannot exceed 1000']
    },
    category: {
        type: String,
        enum: ['Starters', 'Main', 'Dessert', 'Drinks'],
        required: true,
        message: '{VALUE} is not a valid category.',
    }, 
    isVegetarian: {
        type: Boolean,
        default: false,
    },
    reviews: [
{
 user: String,
 rating: { type: Number, min: 1, max: 5 },
 comment: String
}
 ],

chef: {
 type: mongoose.Schema.Types.ObjectId,// This is a "Link"
 ref: 'Chef',
}


});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
