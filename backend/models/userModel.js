import mongoose from "mongoose"

const model= new mongoose.Schema({
    id:{
        type:"UUID"
    },
    name:{
        required: true,
        type:String,
    },
    email:{
        required:true,
        isEmail: true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String,
    }
    ,
    role:{
        required:true,
        type:String,
    }

})
const User = mongoose.model("User",model)
export default User