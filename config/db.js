import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🔥 MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ MongoDB Failed to Connect");
    console.log(error);
  }
};
