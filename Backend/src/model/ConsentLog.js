import mongoose from "mongoose";
import {
  Schema,
  commonSchemaOptions,
  consentStatuses,
  consentTypes,
} from "./helpers.js";

const consentLogSchema = new Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    guardianName: {
      type: String,
      required: true,
      trim: true,
    },
    consentType: {
      type: String,
      enum: consentTypes,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: consentStatuses,
      required: true,
      default: "PENDING",
    },
    grantedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    expiresAt: {
      type: Date,
    },
  },
  commonSchemaOptions
);

export default mongoose.model("ConsentLog", consentLogSchema);
