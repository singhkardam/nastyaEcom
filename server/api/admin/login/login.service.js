const { pool } = require('../../../config/db');

module.exports = {
    adminLoginQuery: (username, callBack) => {
        pool.query(
            `select * from admin where username = ?`,
            [
                username
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }else{
                    return callBack(null, results[0]);
                }
            }
        );
    }
}