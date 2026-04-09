import mongoose from "mongoose";
import { Schema, commonSchemaOptions } from "./helpers.js";

const patientMedicalHistorySchema = new Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
      unique: true,
    },
    diabetes: {
      type: Boolean,
      default: false,
    },
    hypertension: {
      type: Boolean,
      default: false,
    },
    heartDisease: {
      type: Boolean,
      default: false,
    },
    neurologicalDisorders: {
      type: [String],
      default: [],
    },
    familyHistoryAlzheimers: {
      type: Boolean,
      default: false,
    },
    notes: {
      type: String,
      trim: true,
    },
    recordedAt: {
      type: Date,
      default: Date.now,
    },
  },
  commonSchemaOptions
);

export default mongoose.model(
  "PatientMedicalHistory",
  patientMedicalHistorySchema
);
