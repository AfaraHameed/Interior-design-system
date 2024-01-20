const BudgetRepository = require("../repository/budget");
const addBudgetToMaterial = (allocatedAmount, projectid, materialid) => {
  const response = BudgetRepository.addBudgetToMaterial(
    allocatedAmount,
    projectid,
    materialid
  );
  return response
};
const getBudget = (projectid)=>{
    const response = BudgetRepository.getBudget(projectid)
    return response
}
module.exports = {addBudgetToMaterial,getBudget}