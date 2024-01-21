const sequelize = require("../config/orm");
const { Budget } = require("../model/budget");
const { Material } = require("../model/material_service");
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
  return new Promise(async (resolve, reject) => {
    const materialsAndBudgets = await Budget.findAll({
      include: [
        {
          model: Material,
          as: "material",
        },
      ],
      where: {
        projectId: projectid,
      },
    });

    const balance_budget = await Budget.findAll({
      attributes: [
        [
          sequelize.fn("SUM", sequelize.col("allocatedAmount")),
          "totalAllocatedBudget",
        ],
      ],
    })
      .then((data) => {
        budgetAllocated = data[0].dataValues.totalAllocatedBudget;
        resolve([materialsAndBudgets, budgetAllocated]);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = { addBudgetToMaterial, getBudget };
