import mongoose from "mongoose";
import { Schema, commonSchemaOptions } from "./helpers.js";

const mriScanSchema = new Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    branchId: {
      type: Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    scanDate: {
      type: Date,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
      trim: true,
    },
    ipfsHash: {
      type: String,
      trim: true,
    },
    scanFormat: {
      type: String,
      required: true,
      trim: true,
    },
    scanNotes: {
      type: String,
      trim: true,
    },
    encryptedKeyReference: {
      type: String,
      trim: true,
    },
  },
  commonSchemaOptions
);

export default mongoose.model("MriScan", mriScanSchema);
