const asyncHandler = require("../middlewares/asyncHandler");
const userRepository = require("../repository/user");
const { compareWithPassword } = require("../util/passwordHelper");
const {createJwt} = require('../util/jwtHelper')
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await userRepository.getUserByUsername(username);
  if (!user) {
    next(new ErrorResponse(`Invalid credential`), 400);
  } else {
    const isMatching = compareWithPassword(password, user.password);
    if (isMatching) {
      req.session.userId = user.id;
      const token = createJwt(user.id);
      res.status(201).json({ message: "Login Successfully", data: user,token:token });
    }
  }
});
module.exports = { login };
