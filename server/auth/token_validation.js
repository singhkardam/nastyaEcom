const { verify } = require('jsonwebtoken');
module.exports = {
    checkToken: (req, res, next) => {
        const token = req.get('authorization');
        if(token){
            token = token.slice(7);
            verify(token, "ank123")
        }else{
            res.json({
                success:0,
                message: 'Access denied! unauthorized user'
            })
        }
    }
}