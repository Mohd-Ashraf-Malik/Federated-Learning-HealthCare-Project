import mongoose from "mongoose";
import {
  Schema,
  commonSchemaOptions,
  userRoles,
} from "./helpers.js";

const userSchema = new Schema(
  {
    branchId: {
      type: Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: userRoles,
      required: true,
    },
    department: {
      type: String,
      trim: true,
    },
  },
  commonSchemaOptions
);

export default mongoose.model("User", userSchema);
