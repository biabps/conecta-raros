const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema( 

    {
        _id:{
            type: mongoose.Schema.Types.ObjectId,
            default:mongoose.Types.ObjectId
        },
        username: {
            type:String,
            require: true,
            unique: true,
        },
        illness: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        number: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            require: true,
        },
        
    }
);
 const Model = mongoose.model("user",UserSchema);

 module.exports = Model