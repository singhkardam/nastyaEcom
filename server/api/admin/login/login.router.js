const  { adminLogin } = require('./login.controller');

const router = require('express').Router();

const adminSignIn = router.post('/admin/login', adminLogin);

module.exports = {
    adminSignIn
}