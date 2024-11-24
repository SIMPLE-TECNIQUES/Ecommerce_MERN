const mongoose = require('mongoose');

const Product = mongoose.model('product',
{
    id:{
        type:Number,
        requires:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        requires:true,
    },
    old_price:{
        type:Number,
        requires:true,
    },
    quantity:{
        type:Number,
        requires:true,
    },
    date:
    {
        type:Date,
        default:Date.now,
    },
    available:
    {
        type:Boolean,
        default:true,
    }
})

module.exports = Product;