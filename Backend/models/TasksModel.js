import mongoose from "mongoose";

const TasksSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "please add name for this task"] },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "project",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    position: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", TasksSchema);
