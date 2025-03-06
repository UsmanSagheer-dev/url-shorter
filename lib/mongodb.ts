import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) return;

    const uri = "mongodb+srv://url-shorter:<db_password>@url-shorter.slze7.mongodb.net/?retryWrites=true&w=majority&appName=url-shorter";
    
    if (!uri) {
      throw new Error("MONGODB_URI not defined");
    }

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      retryWrites: true,
      w: "majority"
    });
    
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw new Error("Database connection failed");
  }
};