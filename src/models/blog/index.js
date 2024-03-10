import { Schema, model } from "mongoose";
import mongoose from "mongoose"
const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
		default: Date.now
    },

}, { timestamps: true });

const blogModel = mongoose.models.blog || model("blog", blogSchema);
module.exports = blogModel;