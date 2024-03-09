const { Schema, model } = require("mongoose");
const userSchema = new Schema({
    FullName: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    }
}, { timestamps: true });

const userModel = model("user", userSchema);
module.exports = userModel;