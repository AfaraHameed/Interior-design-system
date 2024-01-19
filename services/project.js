const projectRepository = require('../repository/project')
const getProjectDetails = (projectid)=>{
    const response = projectRepository.getProjectDetails(projectid)
    return response
}
const countProjects = ()=>{
    const response  = projectRepository.countProjects()
    return response
}
const updateProject = (projectId,proposalId)=>{
    const response = projectRepository.updateProject(projectId,proposalId)
    return response
}

const getProposal = (projectId)=>{
    const response= projectRepository.getProposal(projectId);
    return response
}
module.exports = {getProjectDetails,countProjects,updateProject,getProposal}