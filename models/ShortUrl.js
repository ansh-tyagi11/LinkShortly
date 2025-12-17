import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const ShortUrlSchema = new Schema({
    originalUrl: { type: String, required: true, trim: true, },
    shortId: { type: String, required: true, unique: true, index: true, },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true, },
    clicks: { type: Number, default: 0, },
    isActive: { type: Boolean, default: true, },
    expiresAt: { type: Date, default: null, index: true, },
    title: { type: String, default: "", },
    tags: { type: [String], default: [], index: true, },
}, { timestamps: true, });

export default mongoose.models.ShortUrl || model("ShortUrl", ShortUrlSchema);