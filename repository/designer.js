const {Designer} = require('../model/designer')
const addDesigner = (userid)=>{
    return new Promise(async(resolve, reject) => {
       Designer.create({userId: userid,
        createdAt: new Date(),
        updatedAt: new Date()},).then((data)=>{
        resolve(data);
       }).catch((err)=>{
        reject(err)
       })
    })
}
module.exports={
    addDesigner
}