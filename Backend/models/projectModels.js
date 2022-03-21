import mongoose from "mongoose";

import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "choose name please"],
    },
    description: {
      type: String,
      required: [true, "let me no more about your project"],
    },

    planing: {
      type: String,
      required: [true, "let see how can we work"],
    },
    employer: {
      type: mongoose.Schema.Types.ObjectId,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("projects", projectSchema);
