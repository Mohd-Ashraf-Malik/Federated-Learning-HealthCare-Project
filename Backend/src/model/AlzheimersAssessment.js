import mongoose from "mongoose";
import {
  Schema,
  commonSchemaOptions,
  diagnosisStatuses,
  diseaseStages,
} from "./helpers.js";

const alzheimersAssessmentSchema = new Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    branchId: {
      type: Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },
    assessmentDate: {
      type: Date,
      required: true,
    },
    symptoms: {
      type: String,
      trim: true,
    },
    memoryLossLevel: {
      type: Number,
      min: 0,
      max: 10,
    },
    cognitiveScore: {
      type: Number,
      min: 0,
      max: 100,
    },
    mmseScore: {
      type: Number,
      min: 0,
      max: 30,
    },
    mocaScore: {
      type: Number,
      min: 0,
      max: 30,
    },
    diagnosisStatus: {
      type: String,
      enum: diagnosisStatuses,
      required: true,
    },
    diseaseStage: {
      type: String,
      enum: diseaseStages,
      required: true,
    },
    doctorNotes: {
      type: String,
      trim: true,
    },
    followUpDate: {
      type: Date,
    },
  },
  commonSchemaOptions
);

export default mongoose.model(
  "AlzheimersAssessment",
  alzheimersAssessmentSchema
);
