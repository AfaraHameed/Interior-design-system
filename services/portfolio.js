const portfolioRepository = require('../repository/portfolio')
const addPortfolio = (name,beforeImage,afterImage,description,projectid,designerid)=>{
    const response= portfolioRepository.addPortfolio(name,beforeImage,afterImage,description,projectid,designerid)
    return response
}
const getPortfolio= (designerid)=>{
    const response = portfolioRepository.getPortfolio(designerid)
    return response
}
module.exports={addPortfolio,getPortfolio}