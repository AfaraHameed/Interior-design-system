const projectRepository = require('../repository/project')
const getProjectDetails = (projectid)=>{
    const response = projectRepository.getProjectDetails(projectid)
    return response
}
const countProjects = ()=>{
    const response  = projectRepository.countProjects()
    return response
}
module.exports = {getProjectDetails,countProjects}