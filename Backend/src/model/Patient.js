import mongoose from "mongoose";
import { Schema, commonSchemaOptions } from "./helpers.js";

const patientSchema = new Schema(
  {
    globalPatientId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      min: 0,
      max: 130,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    contactNumber: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    guardianName: {
      type: String,
      required: true,
      trim: true,
    },
    guardianContact: {
      type: String,
      required: true,
      trim: true,
    },
  },
  commonSchemaOptions
);

export default mongoose.model("Patient", patientSchema);
