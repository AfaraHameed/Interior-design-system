const { User } = require("../model/user");

const getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    console.log("from repo", username);
    User.findOne({
      where: {
        username: username,
      },
    })
      .then((data) => {
        resolve(data.dataValues);
        console.log(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    User.findAll()
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const updateProfile = (userid, newProfile) => {
  return new Promise((resolve, reject) =>
    User.update(newProfile, { where: { userid: userid }, returning: true })
      .then((data) => {
        resolve(data[1]);
      })
      .catch((err) => {
        reject(err);
      })
  );
};
const deletUserAccount = (userid) => {
  return new Promise((resolve, reject) => {
    User.destroy({ where: { userid: userid } })
      .then(() => {
        resolve(true);
      })
      .catch((err) => {
        reject("Error deleting account");
      });
  });
};
const checkRecordExists = (userid) => {
  return new Promise((resolve, reject) => {
    User.findByPk(userid)
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const getRolesByUserId = (userid)=>{
  console.log('userid',userid);
  return new Promise((resolve,reject)=>{
    const user = User.findOne({
      where: { userid:userid },
      attributes: ['role'], 
    }).then((data)=>{
      console.log(data);
      resolve(data.dataValues.role)
    }).catch((err)=>{
      reject(err)
    })
  })
}
module.exports = {
  getUserByUsername,
  getAllUsers,
  updateProfile,
  deletUserAccount,
  checkRecordExists,
  getRolesByUserId
};
