const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        required: Date.now,
    },
});

model.exports = mongoose.model("user", UserSchema);