const {verifyToken} = require('../util/jwtHelper')
const verifyTokenHandler = async(req,res,next)=>{
    let token = req.headers["authorization"]
    if(token && token.includes("Bearer"))
    {
        try{
            const result = await verifyToken(token)
            const userId = result.userId
            req.userId = userId
            return next()
        }catch(error){
            res.status(401).json({message:"invalid token"})
        }
    }
    else{
        console.log("no token provided");
        res.status(403).send({auth:false, message:'No Token Provided'})
    }
}
module.exports={
    verifyTokenHandler
}