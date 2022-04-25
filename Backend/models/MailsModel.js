import mongoose from "mongoose";
const MailsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please send your name"],
    },
    email: {
      type: String,
      required: [true, "please send your email"],
    },
    phone: {
      type: String,
      required: [true, "please send your phone"],
    },
    description: {
      type: String,
      required: [true, "please send your description"],
    },

  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Mails", MailsSchema);
