const mongoose = require('mongoose');

const Users = mongoose.model('Users',
{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    CartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})


module.exports = Users