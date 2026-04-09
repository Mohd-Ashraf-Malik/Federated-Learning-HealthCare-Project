import mongoose from "mongoose";
import { Schema, commonSchemaOptions } from "./helpers.js";

const treatmentSchema = new Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    assessmentId: {
      type: Schema.Types.ObjectId,
      ref: "AlzheimersAssessment",
      required: true,
    },
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    medications: {
      type: [String],
      default: [],
    },
    therapyPlan: {
      type: String,
      trim: true,
    },
    dietRecommendations: {
      type: String,
      trim: true,
    },
    caregiverGuidelines: {
      type: String,
      trim: true,
    },
  },
  commonSchemaOptions
);

export default mongoose.model("Treatment", treatmentSchema);
