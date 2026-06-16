import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Creates a MongoDB unique index
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    subscription: [
      {
        type: Schema.Types.ObjectId, // Cleaned up redundant reference
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

// Fixed typo from USer to User
export const User = mongoose.model("User", userSchema);
