import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "choose name please"],
    },

  },
  {
    timestamps: true,
  }
);

export default mongoose.model("project", projectSchema);
