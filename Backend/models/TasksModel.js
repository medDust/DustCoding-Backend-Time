import mongoose from "mongoose";

const TasksSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "please add name for this task"] },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "project",
    },
    projectName: {
      type: String,
    },
    usersId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    EmployerName: {
      type: String,
    },
    position: {
      type: String,
      default: "To Do",
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
