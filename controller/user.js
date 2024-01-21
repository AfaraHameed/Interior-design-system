const asyncHandler = require("../middlewares/asyncHandler");
const ErrorResponse =require('../util/errorResponse')
const userRepository = require("../repository/user");
const { compareWithPassword } = require("../util/passwordHelper");
const {createJwt} = require('../util/jwtHelper')
const login = asyncHandler(async (req, res,next) => {
  const { username, password } = req.body;
  const user = await userRepository.getUserByUsername(username);
  if (!user) {
    next(new ErrorResponse(`Invalid credential`, 401));
  } else {
    const isMatching = compareWithPassword(password, user.password);
    if (isMatching) {
      const token = createJwt(user.userid);
      res.status(200).json({ message: "Login Successfully", data: user,token:token });
    }
    else{
      next(new ErrorResponse(`Invalid credential`, 401));
    }
  }
});
const updateProfile = asyncHandler(async(req,res,next)=>{
  const id = req.params.id
  //role is assigned by admin.It can not change.
  const{role,...newProfile}=req.body
  console.log(newProfile);
    const user=await userRepository.updateProfile(id,newProfile)
    if(user){
      res.status(200).json({success:true,message:"Update Profile Successfully",updated_profile:user})
    }
})
module.exports = { login ,updateProfile};
