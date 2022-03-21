import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please add a user name"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "please add a e-mail"],
      trim: true,
    },
    fullName: {
      type: String,
      required: [true, "please add a user name"],
    },
    password: {
      type: String,
      required: [true, "please add a password"],
      trim: true,
    },
    department: {
      type: String,
    },
    role: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmWC2KZhMnDyJ1u9aqLAieJBTblco4W0ouFI351w64SrB4junttBfvpXtnas4NE7tye4&usqp=CAU",
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", userSchema);
