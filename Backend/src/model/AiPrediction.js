import mongoose from "mongoose";
import {
  Schema,
  commonSchemaOptions,
  diseaseStages,
} from "./helpers.js";

const aiPredictionSchema = new Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    scanId: {
      type: Schema.Types.ObjectId,
      ref: "MriScan",
      required: true,
    },
    assessmentId: {
      type: Schema.Types.ObjectId,
      ref: "AlzheimersAssessment",
    },
    modelVersion: {
      type: String,
      required: true,
      trim: true,
    },
    predictedClass: {
      type: String,
      enum: diseaseStages,
      required: true,
    },
    confidenceScore: {
      type: Number,
      required: true,
      min: 0,
      max: 1,
    },
    predictionDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    reviewedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reviewNotes: {
      type: String,
      trim: true,
    },
  },
  commonSchemaOptions
);

export default mongoose.model("AiPrediction", aiPredictionSchema);
