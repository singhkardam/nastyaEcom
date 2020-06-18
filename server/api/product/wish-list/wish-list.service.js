const { pool } = require('../../../config/db');

module.exports = {
    wishListQuery: (body, callBack) => {
        pool.query(
            `insert into wishlist(user_id, product_id)
             values(?,?);`,
             [
                 body.user_id,
                 body.product_id
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
    getWishListItemByUserId:(user_id, callBack) => {
        pool.query(
            `select wishlist.id, wishlist.user_id, wishlist.product_id, products.name, products.price, products.imageUrl, products.description  from wishlist join products where user_id = ? and wishlist.product_id = products.id;`,
            [
                user_id
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }else{
                    return callBack(null, results);                    
                }
            }
        )
    }
}