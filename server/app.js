require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const { 
    signUp,
    getUsers,
    getUserDetailsById,
    getLogin
} = require('./api/user/signup/user.signup.router');

const { 
    adminSignIn 
} = require('./api/admin/login/login.router');

const { 
    insertProductCategory,
    getAllProductCategory
} = require('./api/product/category/category.router');

const  {
    addProduct,
    getProduct,
    getProductByCategory 
} = require('./api/product/add/add.router');

const { getDetailsOfProduct } = require('./api/product/get/get.router');
const { 
    wishListProduct,
    getWishListProductById 
} = require('./api/product/wish-list/wish-list.router');

app.use(express.json());
app.use('/', 
    signUp, 
    getUsers, 
    getUserDetailsById,
    getLogin,
    adminSignIn,
    insertProductCategory,
    getAllProductCategory,
    addProduct,
    getProduct,
    getProductByCategory,
    getDetailsOfProduct,
    wishListProduct,
    getWishListProductById
);

app.listen(`${process.env.SERVER_PORT}`, () => {
    console.log("app running on port", `${process.env.SERVER_PORT}`);
});
