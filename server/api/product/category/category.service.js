const { pool } = require('../../../config/db');

module.exports = {
    insertCategoryProduct: (body, callBack) => {
        pool.query(
            `insert into category(category_name)values(?);`,
            [
                body.category_name
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
    selectCategoryProduct: (callBack) => {
        pool.query(
            `select id, category_name from category`,
            [
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }else{
                    return callBack(null, results);                    
                }
            }
        );
    }
}