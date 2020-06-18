const { 
    wishList,
    getWishListItem 
} = require('./wish-list.controller');
const router = require('express').Router();
const wishListProduct = router.post('/wish-list', wishList);
const getWishListProductById = router.get('/wish-list/:user_id', getWishListItem);
module.exports = {
    wishListProduct,
    getWishListProductById
}