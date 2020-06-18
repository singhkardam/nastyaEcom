const { 
    insertCategoryProduct,
    selectCategoryProduct 
} = require('./category.service');

module.exports = {
    insertCategory: (req, res) => {
        const body = req.body;
        insertCategoryProduct(body, (error, results) => {
            if(error){
                console.log(error);
                if (error.code === 'ER_DUP_ENTRY') {
                    return res.status(500).json({
                        success:0,
                        message:'Product category already exists'
                    });
                }else{
                    return res.status(500).json({
                        success:0,
                        message:'Database connection error'
                    });
                }
            }
            if(!error){
                return res.status(200).json({
                    success:1,
                    message:'Product category add successfully',
                    data:results,
                });                  
            }
        })
    },
    getAllCategory: (req, res) => {
        selectCategoryProduct((error, results) => {
            if(error){
                return res.status(500).json({
                    success:0,
                    message:'Database connection error'
                })
            }else{
                return res.status(200).json({
                    success:1,
                    message:'All Product Category',
                    data:results
                })                
            }
        });
    }
}