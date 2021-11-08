const {Schema, model,Types} = require('mongoose')

const schema = new Schema({
    name:{type:String, required:true},
    productid:{type:Number, required:true, unique:true},
    desc:{type:String, required:true},
    img:{type:String, required:true},
    quantity:{type:Number, default:0},
    price:{type:Number, required:true},
    bought:{type:Number, default:0},
    category:{type:String}
})

module.exports = model('Product', schema)