import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: { type: String,},
    username: { type: String },
    image: { type: String },
}, { timestamps: true });

export default mongoose.models.User || model('User', UserSchema);