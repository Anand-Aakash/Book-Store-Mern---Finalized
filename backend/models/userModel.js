import mongoose from "mongoose"

const userSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
     
    },
    email:{
        type:String,
        required:true
     
    },
    password:{
        type:String,
        required:true
      
    },
    role:{
        type:String,
        required:true,
        default:'user',
        enum:['user','admin']
    }
   
}, {timestamps:true})
export const User=mongoose.model('User',userSchema)