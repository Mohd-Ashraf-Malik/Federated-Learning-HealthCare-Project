import mongoose from "mongoose";
import {
  Schema,
  accessActions,
  accessStatuses,
  commonSchemaOptions,
} from "./helpers.js";

const accessLogSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    scanId: {
      type: Schema.Types.ObjectId,
      ref: "MriScan",
    },
    assessmentId: {
      type: Schema.Types.ObjectId,
      ref: "AlzheimersAssessment",
    },
    branchId: {
      type: Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },
    actionType: {
      type: String,
      enum: accessActions,
      required: true,
    },
    reason: {
      type: String,
      required: true,
      trim: true,
    },
    accessTime: {
      type: Date,
      required: true,
      default: Date.now,
    },
    accessStatus: {
      type: String,
      enum: accessStatuses,
      required: true,
      default: "SUCCESS",
    },
    blockchainTxnHash: {
      type: String,
      trim: true,
    },
  },
  commonSchemaOptions
);

export default mongoose.model("AccessLog", accessLogSchema);
