const clientRepository = require('../repository/client')
const addClient = (userid)=>{
    const response = clientRepository.addClient(userid)
    return response
}
module.exports={addClient}