const { getProductDetails } = require('./get.controller');
const router = require('express').Router();

const getDetailsOfProduct = router.get('/product/detail/:id', getProductDetails);

module.exports = {
    getDetailsOfProduct
}