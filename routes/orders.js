const express = require('express');
const orderController = require('../controllers/order.controller');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

module.exports = router;
