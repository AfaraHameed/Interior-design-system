const {Material} = require('../model/material_service')
const addMaterial = (name,description)=>{
    return new Promise((resolve,reject) => {
        Material.create({name,description}).then((data)=>{
            resolve(data);
        })
        .catch(()=>{
            reject(err);
    })
})}
module.exports = {addMaterial}