import mongoose from "mongoose";

const markedQuotesSchema = new mongoose.Schema(
  {
    markedQuotes: { type: Object, required: true },
    userId: { type: Number, required: true },
    dateSynced: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("marked-quotes", markedQuotesSchema);
