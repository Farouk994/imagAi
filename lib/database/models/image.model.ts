import { create } from "domain";
import { Document, model, models, Schema } from "mongoose";

import { Types } from "mongoose";

export interface Image extends Document {
    title: string;
    transformation: string;
    publicId: string;
    secureURL: string;
    width?: number;
    height?: number;
    config?: object;
    transformationURL?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: string,
        firstName: string,
        lastName: string,
    };
    createdAt?: Date;
    updatedAt?: Date;
}

const ImageSchema = new Schema({
  title: { type: String, required: false },
  transformation: { type: String, required: false },
  publicId: { type: String, required: true },
  secureURL: { type: String, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: String },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;