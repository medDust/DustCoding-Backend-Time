import mongoose from "mongoose";

const TeamSchema = mongoose.Schema(
  {
    UserId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("team", TeamSchema);
