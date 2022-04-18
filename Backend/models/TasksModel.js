import mongoose from "mongoose";

const TasksSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "please add name for this task"] },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", TasksSchema);
