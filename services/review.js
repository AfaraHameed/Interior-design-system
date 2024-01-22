const ReviewRepository  = require('../repository/review')
const addReviews = (projectId,clientId,description,ratings)=>{
    const response = ReviewRepository.addReviews(projectId,clientId,description,ratings)
    return response
}
module.exports = {addReviews}