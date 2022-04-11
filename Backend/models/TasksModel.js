import mongoose from "mongoose";

const TasksSchema = mongoose.Schema(
  {
    name: { type: String, require: [true, "please add name for this task"] },
    finishTime: {
      type: Date,
      require: [true, "let's choose your time"],
    },
    Team: {
      type: { Team: mongoose.Schema.Types.ObjectId },
      require: [true, "please select your team"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", TasksSchema);
