var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);

function hashPassword(password) {
  var hash = bcrypt.hashSync(password, salt);
  return hash;
}

 function compareWithPassword(plainPassword, hashedPassword) {
  var isMatching =  bcrypt.compareSync(plainPassword, hashedPassword);
  console.log("ismatching",isMatching);
  return isMatching;
}
module.exports = { hashPassword, compareWithPassword };
