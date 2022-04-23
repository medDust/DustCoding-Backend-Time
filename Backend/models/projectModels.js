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
    user:{
      type : mongoose.Schema.Types.ObjectId ,
      ref : "User",
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("project", projectSchema);
