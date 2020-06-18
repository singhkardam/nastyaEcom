const { 
    wishListQuery,
    getWishListItemByUserId 
} = require('./wish-list.service');

module.exports = {
    wishList: (req, res) =>{
        const body = req.body;
        wishListQuery(body, (error, results) => {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:'Database connection error'
                });
            }else{
                return res.status(200).json({
                    success:1,
                    message:'Query Running Successfully',
                    data:results
                });
            }
        });
    },
    getWishListItem: (req, res) => {
        const user_id = req.params.user_id;
        getWishListItemByUserId(user_id, (error, results) => {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:'Database Conncetion Error'
                });
            }else if(results.length == 0){
                return res.status(500).json({
                    success:0,
                    message:'Invalid Id',
                });
            }else{
                return res.status(200).json({
                    success:1,
                    message:'Get User by Id',
                    data:results
                });
            }
        });
    }
}