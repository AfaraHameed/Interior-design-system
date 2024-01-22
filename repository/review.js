const { Project } = require("../model/project");
const { Review } = require("../model/review");
const addReviews = (projectId,clientId,description,ratings)=>{
    return new Promise((resolve,reject)=>{
        Review.create({projectId,clientId,description,ratings}).then((data)=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
    })
}
module.exports={addReviews}