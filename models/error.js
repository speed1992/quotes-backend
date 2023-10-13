import mongoose from "mongoose";

const errorSchema = new mongoose.Schema(
  {
    errorDetails: { type: Object, required: true },
    userName: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("error", errorSchema);
