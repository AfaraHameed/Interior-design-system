var jwt = require('jsonwebtoken');
var SECRET = "upcode123";
function createJwt(userId) {
  var token = jwt.sign({ userId: userId }, SECRET);
  return token;
}

function verifyToken(token) {
  //replace Bearer(one space too)
  const formattedToken = token.replace("Bearer ", "");
  console.log("formatted token", formattedToken);
  return new Promise((resolve, reject) => {
    jwt.verify(formattedToken, SECRET, (err, decoded) => {
      if (err) {
        reject({ valid: false, error: err });
      } else {
        console.log("resolved",decoded.userId);
        return resolve({ valid: true, userId: decoded.userId });
      }
    });
  });
}
module.exports = {
  createJwt,
  verifyToken,
};
