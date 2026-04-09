import mongoose from "mongoose";
import {
  Schema,
  commonSchemaOptions,
  federatedRoundStatuses,
} from "./helpers.js";

const federatedModelRoundSchema = new Schema(
  {
    roundNumber: {
      type: Number,
      required: true,
      min: 1,
      unique: true,
    },
    modelName: {
      type: String,
      required: true,
      trim: true,
    },
    startedAt: {
      type: Date,
    },
    endedAt: {
      type: Date,
    },
    globalModelPath: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: federatedRoundStatuses,
      required: true,
      default: "PENDING",
    },
  },
  commonSchemaOptions
);

export default mongoose.model(
  "FederatedModelRound",
  federatedModelRoundSchema
);
