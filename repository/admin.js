const { User } = require("../model/user");
const {hashPassword} = require("../util/passwordHelper")
const createUserByAdmin = (
  username,
  plainpassword,
  role,
  firstname,
  lastname,
  email,
  phone,
  place,
  district
) => {
  return new Promise((resolve, reject) => {
    const password = hashPassword(plainpassword)
    User.create({
      username,
      password,
      role,
      firstname,
      lastname,
      email,
      phone,
      place,
      district,
    }).then((data)=>{
        resolve(data);
    }).catch((err)=>{
        reject(err)
    })
  });
};
module.exports = {createUserByAdmin};
