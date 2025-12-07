import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, },
    username: { type: String },
    name: { type: String },
    image: { type: String },
    signUp: {
        password: { type: String },
        name: { type: String },
        email: { type: String },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.models.User || model('User', UserSchema);