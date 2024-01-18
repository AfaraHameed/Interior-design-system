const {FAQ} = require('../model/FAQ')
const addFAQ = (question,answer)=>{
    return new Promise((resolve,reject)=>{
        FAQ.create({question,answer}).then((data)=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
    })
}
module.exports = {addFAQ}