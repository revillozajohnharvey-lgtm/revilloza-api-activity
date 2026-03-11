const express = require('express');
const router = express.Router();
const chefController = require('../controllers/chefController');

const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/auth/chefs', chefController.getAllChefs);
router.post('/auth/chefs', chefController.createChef);

const {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
} = require('../controllers/dishController');


router.get('/', getAllDishes); // Was '/dishes'
router.post('/', protect, authorize('admin', 'manager'), createDish); // Was '/dishes'
router.get('/:id', getDishById); // Was '/dishes/:id'
router.put('/:id', updateDish);
router.delete('/:id', deleteDish);



module.exports = router;