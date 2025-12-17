import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const ClickSchema = new Schema({
    shortUrl: { type: mongoose.Schema.Types.ObjectId, ref: "ShortUrl", required: true, index: true, },
    timestamp: { type: Date, default: Date.now, index: true, },
    ip: String,
    country: String,
    browser: String,
    device: String,
    referrer: String,
}, { timestamps: false, });

export default mongoose.models.Click || model("Click", ClickSchema);