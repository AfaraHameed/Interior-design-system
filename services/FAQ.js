const FAQRepository = require('../repository/FAQ')
const addFAQ = (question,answer)=>{
    const response = FAQRepository.addFAQ(question,answer )
    return response
}
module.exports = {addFAQ}