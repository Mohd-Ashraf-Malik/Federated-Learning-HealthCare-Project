import mongoose from "mongoose";

const { Schema } = mongoose;

const diseaseStages = [
  "NON_DEMENTED",
  "VERY_MILD_DEMENTED",
  "MILD_DEMENTED",
  "MODERATE_DEMENTED",
];

const diagnosisStatuses = [
  "SUSPECTED",
  "CONFIRMED",
  "UNDER_REVIEW",
  "RULED_OUT",
];

const userRoles = ["ADMIN", "DOCTOR"];

const consentTypes = [
  "SCAN_SHARING",
  "INTER_BRANCH_ACCESS",
  "AI_TRAINING",
  "RESEARCH_USE",
];

const consentStatuses = ["GRANTED", "REVOKED", "EXPIRED", "PENDING"];

const accessActions = ["VIEW", "UPLOAD", "UPDATE", "DELETE", "DOWNLOAD"];
const accessStatuses = ["SUCCESS", "DENIED", "FAILED"];
const federatedRoundStatuses = ["PENDING", "RUNNING", "COMPLETED", "FAILED"];

const commonSchemaOptions = {
  timestamps: true,
  versionKey: false,
};

const objectId = {
  type: Schema.Types.ObjectId,
  required: true,
};

export {
  Schema,
  accessActions,
  accessStatuses,
  commonSchemaOptions,
  consentStatuses,
  consentTypes,
  diagnosisStatuses,
  diseaseStages,
  federatedRoundStatuses,
  objectId,
  userRoles,
};
