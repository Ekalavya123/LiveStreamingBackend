const mongoose = require('mongoose')
const {Schema} =mongoose;

const AdminUserSchema= new Schema({
    name:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    verified:{
        type:Boolean,
        default:false
    },
    admin:{
        type:Boolean,
        default:1
    },


});

module.exports = mongoose.model('Adminuser',AdminUserSchema);