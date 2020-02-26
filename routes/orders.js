const express = require('express');
const orderController = require('../controllers/order.controller');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/create', checkAuth, orderController.create);
router.get('/myorders', checkAuth, orderController.getOrdersForUser);
router.get('/all', checkAuth, orderController.getOrders);

module.exports = router;
