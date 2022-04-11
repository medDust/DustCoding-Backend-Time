import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "choose name please"],
    },
    Tasks: {
      Tasks: { type: mongoose.Schema.Types.ObjectId },
    },
    Team: [
      {
        Team: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("project", projectSchema);
