import mongoose from "mongoose";

const roleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "add new role please"],
    },

    employers: {
      type: mongoose.Schema.Types.ObjectId,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Roles", roleSchema);
