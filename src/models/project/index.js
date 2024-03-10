import { Schema, model } from "mongoose";
import mongoose from "mongoose"
import { stringify } from "postcss";
const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    live: {
        type: String,
        required: true,
    },
    github: {
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
    technology: {
        type: String,
        required: true,
    },
    featured: {
        type: String,
        required: true
    }
}, { timestamps: true });

const projectModel = mongoose.models.project || model("project", projectSchema);
module.exports = projectModel;