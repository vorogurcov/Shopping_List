const express = require('express');
const products_controllers = require('../controllers/products_controllers.js');

const productRouter = express.Router()

productRouter.post('/products/get', products_controllers.get_products);

module.exports = productRouter;