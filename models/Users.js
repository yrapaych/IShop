const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email:{type: String, required:true, unique:true},
    password:{type: String, required:true},
    chosenProduct:[{type:Number}],
    haveBought: [{productid:{type:Number}, quantity:{type:Number}}]
})

module.exports = model('User', schema)