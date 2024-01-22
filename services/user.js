const userRepository = require("../repository/user");
const deletUserAccount = (userid) => {
  response = userRepository.deletUserAccount(userid);
  return response;
};
const checkRecordExists = (userId)=>{
    response = userRepository.checkRecordExists(userId)
    return response
}

module.exports = {deletUserAccount,checkRecordExists}



