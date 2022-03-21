import mongoose from "mongoose";
const DepartmentSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please add new department "],
    },
    employers: {
      type: mongoose.Schema.Types.ObjectId ,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Department", DepartmentSchema);
