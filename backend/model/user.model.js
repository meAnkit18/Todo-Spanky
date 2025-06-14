import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require: true,
        unique: true,
    },
    pasaword:{
        type:String,
        require: true,
        select: false,
    }
})

const User = mongoose.model("User", userSchema)

export default User;