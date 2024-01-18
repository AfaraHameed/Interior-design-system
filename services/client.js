const clientRepository = require('../repository/client')
const addClient = (userid)=>{
    const response = clientRepository.addClient(userid)
    return response
}
const countClients = ()=>{
    const response=clientRepository.countClients()
    return response
}
module.exports={addClient,countClients}