const mongoose=require('mongoose')

const carSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    available:{
        type:Boolean,
        default:true
    }
})

const CarSchema=mongoose.model('car',carSchema)
module.exports=CarSchema