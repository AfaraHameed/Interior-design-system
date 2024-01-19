const { Portfolio } = require("../model/portfolio");
const addPortfolio = (name, beforeImage, afterImage, description, projectid,designerid) => {
  return new Promise((resolve, reject) => {
    const portfolios = Portfolio.create({
      name,
      beforeImage,
      afterImage,
      description,
      projectid,
      designerid
    })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const getPortfolio = (designerid)=>{
    return new Promise((resolve,reject)=>{
        Portfolio.findAll({where:{designerid:designerid}}).then((data)=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
    })
}
module.exports = {addPortfolio,getPortfolio}