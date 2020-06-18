const  { 
    insertProduct,
    selectAllProduct,
    selectProductById 
} = require('./add.controller');
const router = require('express').Router();

const addProduct = router.post('/product/add', insertProduct);
const getProduct = router.get('/product/get', selectAllProduct);
const getProductByCategory = router.get('/product/get/:category_id', selectProductById);
module.exports = {
    addProduct,
    getProduct,
    getProductByCategory 
}