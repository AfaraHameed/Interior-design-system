const designerRepository = require('../repository/designer')
const addDesigner= (userid)=>{
    const response = designerRepository.addDesigner(userid)
    return response
}
const getDesignerId = (userid)=>{
    const response = designerRepository.getDesignerId(userid);
    return response
}
const countDesigners = ()=>{
    const response = designerRepository.countDesigners();
    return response
}
module.exports={addDesigner,getDesignerId,countDesigners}