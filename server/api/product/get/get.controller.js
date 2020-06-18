const { getProductDetailsQuery } = require('./get.service');

module.exports = {
    getProductDetails: (req, res) => {
        const id = req.params.id;
        getProductDetailsQuery(id, (error, results) => {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:'database connection error'
                })
            }else{
                if(results == 0){
                    return res.status(500).json({
                        success:1,
                        message:'id does not matched',
                    })  
                }else{
                    return res.status(200).json({
                        success:1,
                        message:'get product details',
                        data:results
                    })  
                }              
            }

        });
    }
}