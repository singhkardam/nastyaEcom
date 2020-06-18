const { 
    insertCategory,
    getAllCategory 
} = require('./category.controller');
const router = require('express').Router();

const insertProductCategory = router.post('/product/category/add', insertCategory);
const getAllProductCategory = router.get('/product/category/get', getAllCategory);
module.exports = {
    insertProductCategory,
    getAllProductCategory 
}