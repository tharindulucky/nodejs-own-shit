const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/',  productController.index);
router.get('/:id', productController.show);
router.post('/',  productController.save);
router.patch('/:id', productController.update);
router.delete('/:id', productController.destroy);

module.exports = router;
