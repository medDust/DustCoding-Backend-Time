import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

export default connectDB;
