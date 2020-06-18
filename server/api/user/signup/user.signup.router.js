const {
    insertUser,
    getAllUser,
    getUserById,
    login
} = require('./user.signup.controller');

const router = require('express').Router();

const signUp = router.post('/user/signup', insertUser);
const getUsers = router.get('/user/signup', getAllUser);
const getUserDetailsById = router.get('/user/signup/:id', getUserById);
const getLogin = router.post('/user/login', login);

module.exports = {
    signUp,
    getUsers,
    getUserDetailsById,
    getLogin    
};