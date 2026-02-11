const express = require('express');
const router = express.Router();
const chefController = require('../controllers/chefController');


router.get('/chefs', chefController.getAllChefs);
router.post('/chefs', chefController.createChef);

const {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
} = require('../controllers/dishController');
//1 get
router.get('/dishes', getAllDishes);
//2 post
router.post('/dishes', createDish);
//3 get by id
router.get('/dishes/:id', getDishById);
//4 put
router.put('/dishes/:id', updateDish);
//5 delete
router.delete('/dishes/:id', deleteDish);








module.exports = router;