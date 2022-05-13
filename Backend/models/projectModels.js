import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "choose name please"],
    },
    state: {
      type: Number,
      default: 0,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    fullName: {
      type: String,
    },
    dateBeguin: {
      type: String,
    },
    dateEnd: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("project", projectSchema);
