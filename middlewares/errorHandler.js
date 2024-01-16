const errorHandler = (error,req,res,next)=>{
       console.log(error);

    res.status(error.statuscode || 500).json({message:error.message || "server error"})
}
module.exports =  errorHandler