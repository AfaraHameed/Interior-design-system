const designerRepository = require('../repository/designer')
const addDesigner= (userid)=>{
    const response = designerRepository.addDesigner(userid)
    return response
}
module.exports={addDesigner}