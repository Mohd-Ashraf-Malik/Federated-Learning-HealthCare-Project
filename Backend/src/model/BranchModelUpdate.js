import mongoose from "mongoose";
import { Schema, commonSchemaOptions } from "./helpers.js";

const branchModelUpdateSchema = new Schema(
  {
    roundId: {
      type: Schema.Types.ObjectId,
      ref: "FederatedModelRound",
      required: true,
    },
    branchId: {
      type: Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },
    submittedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    localModelPath: {
      type: String,
      required: true,
      trim: true,
    },
    sampleCount: {
      type: Number,
      required: true,
      min: 0,
    },
    accuracy: {
      type: Number,
      min: 0,
      max: 1,
    },
    loss: {
      type: Number,
      min: 0,
    },
    submittedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  commonSchemaOptions
);

export default mongoose.model("BranchModelUpdate", branchModelUpdateSchema);
