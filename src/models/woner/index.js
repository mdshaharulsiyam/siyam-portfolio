import { Schema, model } from "mongoose";
import mongoose from "mongoose"
const wonerSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true
    }
    ,
    facebook: {
        type: String,
        required: true
    }
    ,
    insta: {
        type: String,
        required: true
    }
    ,
    linkdin: {
        type: String,
        required: true
    }
    ,
    twiter: {
        type: String,
        required: true
    }
}, { timestamps: true });

const wonerModel = mongoose.models.woner || model("woner", wonerSchema);
module.exports = wonerModel;