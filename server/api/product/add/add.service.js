const { pool } = require('../../../config/db');

module.exports = {
    insertProductQuery: (body, callBack) => {
        pool.query(
            `insert into products(name, category_id, price, imageUrl, qty, description)
            values(?,?,?,?,?,?);`,
            [
                body.name,
                body.category_id,
                body.price,
                body.imageUrl,
                body.qty,
                body.description
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
    selectAllProductQuery: (body, callBack) => {
        pool.query(
            `select * from products`,
            [
                body
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
    selectProductByIdQuery: (category_id, callBack) => {
        pool.query(
            `select * from products where category_id = ?`,
            [
                category_id  
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