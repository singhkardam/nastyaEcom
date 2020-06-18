const { adminLoginQuery } = require('./login.service');
const { sign } = require('jsonwebtoken');
const { compareSync } = require('bcryptjs');

module.exports = {
    adminLogin: (req, res) => {
        const body = req.body;
        adminLoginQuery(body.username, (error, results) => {
            if(error){
                console.log(error);
                return res.json({
                    success:0,
                    message:'Database connection error'
                });
            }  
            if(!results){
                return res.json({
                    success:0,
                    message:'Invalid Email or Password'
                });
            }       
            const result = compareSync(body.pass, results.pass);
            if(result){
                results.pass = undefined;
                const jsonToken = sign({result: results}, "ank123", {
                    expiresIn: "1h"
                }); 
                return res.json({
                    success:1,
                    message: 'Login Successfully',
                    token:jsonToken
                })
            }else{
                return res.json({
                    success:0,
                    message:'Invalid Email or Password'
                });                
            }   
        })
    }
}