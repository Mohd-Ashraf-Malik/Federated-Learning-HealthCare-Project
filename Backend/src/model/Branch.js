import mongoose from "mongoose";
import { Schema, commonSchemaOptions } from "./helpers.js";

const branchSchema = new Schema(
  {
    branchName: {
      type: String,
      required: true,
      trim: true,
    },
    branchCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
    branchLocation: {
      type: String,
      required: true,
      trim: true,
    },
    contactInfo: {
      phone: { type: String, trim: true },
      email: { type: String, trim: true, lowercase: true },
      address: { type: String, trim: true },
    },
  },
  commonSchemaOptions
);

export default mongoose.model("Branch", branchSchema);
