const  { 
    insertProductQuery,
    selectAllProductQuery,
    selectProductByIdQuery
 } = require('./add.service');

module.exports = {
    insertProduct: (req, res) => {
        const body = req.body;
        insertProductQuery(body, (error, results) => {
            if(error){
                console.log(error);
                if(error.code === 'ER_DUP_ENTRY'){
                    return res.status(500).json({
                        success:0,
                        message:'Product already exists'
                    })
                }else{
                    return res.status(500).json({
                        success:0,
                        message:'Database Connection Error'
                    })
                }
            }
            if(!error){
                return res.status(200).json({
                    success:1,
                    message:'product succesfully insert',
                    data:results
                })
            }
        });
    },
    selectAllProduct: (req, res) => {
        const body = res.body;
        selectAllProductQuery(body, (error, results) => {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:'Database connection error'
                })
            }else{
                return res.status(200).json({
                    success:1,
                    message:'All products',
                    data:results
                })
            }
        })
    },
    selectProductById: (req, res) => {
        const category_id = req.params.category_id;
        selectProductByIdQuery(category_id, (error, results) => {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:'Database connection error'
                });
            }else{
                if(results.length == 0){
                    return res.status(500).json({
                        success:0,
                        message:'category id is not avilable'
                    });
                }else{
                    return res.status(200).json({
                        success:1,
                        message:'get product by category',
                        data:results
                    });    
                }            
            }
        });
    }
}