const { Client } = require("../model/client");
const addClient = (userid) => {
  console.log("id is", userid);
  return new Promise(async (resolve, reject) => {
    Client.create({
      userId: userid,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const countClients = ()=>{
  return Client.count()
}

module.exports = {
  addClient,countClients
};
