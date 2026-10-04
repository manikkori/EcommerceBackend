import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB connected!!");
  } catch (error) {
    console.error("MONGODB connection failed!");
    process.exit(1);
  }
};

export default connectDB;