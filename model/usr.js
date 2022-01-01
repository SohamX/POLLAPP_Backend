const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    mail:
    {
        type: String,
        required:true

    },
    name:{
        type:String,
        required:true

    },
    givenName:{
        type:String,
        required:true

    },


})


const Users=mongoose.model('USERS',userSchema);

module.exports=Users