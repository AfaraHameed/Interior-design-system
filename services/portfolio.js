const portfolioRepository = require('../repository/portfolio')
const addPortfolio = (name,beforeImage,afterImage,description,projectid)=>{
    const response= portfolioRepository.addPortfolio(name,beforeImage,afterImage,description,projectid)
    return response
}
module.exports={addPortfolio}