const projectRepository = require('../repository/project')
const getProjectDetails = (projectid)=>{
    const response = projectRepository.getProjectDetails(projectid)
    return response
}
module.exports = {getProjectDetails}