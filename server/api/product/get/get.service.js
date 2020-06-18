const { pool } = require('../../../config/db');

module.exports = {
    getProductDetailsQuery: (id, callBack) => {
        pool.query(
            `select * from products where id = ?`,
            [id],
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