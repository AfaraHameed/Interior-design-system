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
const getAllUsers = ()=>{
  return new Promise((resolve,reject)=>{
    User.findAll()
    .then((result)=>{
      resolve(result);
    }).catch((err)=>{
      reject(err);
    })
  })
}
module.exports = { getUserByUsername , getAllUsers};
