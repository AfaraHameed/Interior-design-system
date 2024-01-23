const ReviewRepository  = require('../repository/review')
const addReviews = (projectId,userId,description,ratings)=>{
    const response = ReviewRepository.addReviews(projectId,userId,description,ratings)
    return response
}
const getReviews = (projectid) =>{
    const response = ReviewRepository.getReviews(projectid)
    return response
}
module.exports = {addReviews,getReviews}