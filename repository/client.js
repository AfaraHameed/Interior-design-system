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
const getClientId = (userId) => {
  console.log('userId',userId);
  return new Promise((resolve, reject) => {
    Client.findOne({ where: { userId } })
      .then((data) => {
       console.log(data.clientId);
        resolve(data.clientId);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

module.exports = {
  addClient,countClients,getClientId
};
