const MaterialRepository = require('../repository/material')
const addMaterial = (name,description)=>{
    const response = MaterialRepository.addMaterial(name,description)
    return response
}
module.exports ={ addMaterial}