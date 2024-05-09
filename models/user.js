import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:"String",
        required:[true,"Name should be required"]
    },
    email:{
        type:"String",
        required:[true,"mail should be required"],
        unique:true
    },
    password:{
        type:"String",
        required:[true,"Password should be required"]
    }
});

const User = new mongoose.model("User",userSchema);

export default User;