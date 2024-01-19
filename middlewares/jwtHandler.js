const {verifyToken} = require('../util/jwtHelper')
const { getRolesByUserId } = require("../repository/user");
const verifyTokenHandler = async(req,res,next)=>{
    let token = req.headers["authorization"]
    if(token && token.includes("Bearer"))
    {
        try{
            const result = await verifyToken(token)
            const userId = result.userId
            req.userId = userId
            console.log(req.userId);
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
const verifyRole = (roles) => {
    return async (req, res, next) => {
      const userid = req.userId;
      console.log('req userid',userid);
      const userRoles = await getRolesByUserId(userid);
      let hasRole = false;
      
      if(roles==userRoles)
      hasRole=true;  //if the role is admin then it should have all the permissions
      console.log("hasrole", hasRole);
      if (hasRole) next();
      else res.status(403).json("You don't have permission");
    };
  };
module.exports={
    verifyTokenHandler,verifyRole
}