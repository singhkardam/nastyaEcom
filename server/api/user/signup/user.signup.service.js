const { pool } = require('../../../config/db');

module.exports = {
    insertUserData: (body, callBack) => {
        pool.query(
            `insert into user(name, mobileNumber, email, pass)
             values(?,?,?,?);`,
            [
                body.name,
                body.mobileNumber,
                body.email,
                body.pass
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }else{
                    return callBack(null, results);
                }
                
            }
        );
    },
    getUserData: (body, callBack) => {
        pool.query(
            `select id, name, mobileNumber, email, datetime from user`,
            [],
            (error, results, fields) =>{
                if(error){
                    return callBack(error);
                }else{
                    return callBack(null, results);
                }
            }
        );
    },
    getUserByIdData: (id, callBack) => {
        pool.query(
            `select id, name, mobileNumber, email, datetime from user where id = ?`,
            [
                id
            ],
            (error, results, fields) =>{
                if(error){
                    return callBack(error);
                }else{
                    return callBack(null, results[0]);                    
                }
            }
        );
    },
    getUserLoginData: (email, callBack) => {
        pool.query(
            `select * from user where email = ?`,
            [email],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }else{
                    return callBack(null, results[0]);
                }
            }
        );
    }  
};