const { Budget } = require("../model/budget");
const {Material} = require('../model/material_service')
const addBudgetToMaterial = (allocatedAmount, projectId, materialId) => {
  return new Promise((resolve, reject) => {
    Budget.create({ allocatedAmount, projectId, materialId })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const getBudget = (projectid) => {
  return new Promise((resolve, reject) => {
    const materialsAndBudgets = Budget.findAll({
        include: [
          {
            model: Material,
            as: 'material',
          },
        ],
        where: {
          projectId: projectid,
        },
        // includeIgnoreAttributes: false,
      }).then((data)=>{
        resolve(data)
      }).catch((err)=>{
        reject(err)
      })
  });
};
module.exports = { addBudgetToMaterial, getBudget };
