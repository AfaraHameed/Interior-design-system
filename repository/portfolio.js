const { Portfolio } = require("../model/portfolio");
const addPortfolio = (name, beforeImage, afterImage, description, projectid) => {
  return new Promise((resolve, reject) => {
    const portfolios = Portfolio.create({
      name,
      beforeImage,
      afterImage,
      description,
      projectid,
    })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
module.exports = {addPortfolio}