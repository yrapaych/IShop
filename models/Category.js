const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name:{type:String, unique:true},
    bought:{type:Number, default:0},
    products:[{type:Number, unique:true}]
})

module.exports = model('Category', schema)