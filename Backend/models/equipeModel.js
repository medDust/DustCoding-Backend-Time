import mongoose from "mongoose";


const TeamSchema = mongoose.Schema(
  {
    department: {
      type: String,
      required: [true, "choose your department team"],
    },
    User: [
      {
        User: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("team", TeamSchema);
