const { 
    insertUserData,
    getUserData,
    getUserByIdData,
    getUserLoginData 
} = require('./user.signup.service');
const { genSaltSync, hashSync, compareSync } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

module.exports = {
    insertUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.pass = hashSync(body.pass, salt);
        insertUserData(body, (err, results) => {
            if(err){
                console.log(err);
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(500).json({
                        success:0,
                        message:'Email address already exists'
                    });
                }else{
                    return res.status(500).json({
                        success:0,
                        message:'Database connection error'
                    });
                }
            }
            if(!err){
                return res.status(200).json({
                    success:1,
                    data:results
                });  
            }              

        })
    },
    getAllUser: (req, res) => {
        const body = res.body;
        getUserData(body, (error, results) => {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:'Database Connection Error'
                })
            }else{
                return res.status(200).json({
                    success:1,
                    message:'All users of user',
                    data:results
                })                
            }
        });
    },
    getUserById: (req, res) => {
        const id = req.params.id;
        getUserByIdData(id, (error, results) =>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:'DataBase Connection Error'
                })
            }else if(results == null){
                return res.status(200).json({
                    success:0,
                    message:'User Id does not exists',
                })             
            }else{
                return res.status(200).json({
                    success:1,
                    message:'get user Data By Id',
                    data:results
                })
            }
        });
    },
    login: (req, res) =>{
        const body = req.body;
        getUserLoginData(body.email, (error, results) => {
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
                    data:results,
                    token:jsonToken
                })
            }else{
                return res.json({
                    success:0,
                    message:'Invalid Email or Password'
                });                
            }
        });
    }
}