import mongoose from "mongoose";
import config from "@config/config";

export const connectDB = async (retries = 5, delay = 2000) => {
  while (retries) {
    try {
      await mongoose.connect(config.mongoUrl);
      console.log("Connected to Mongo DB");
      return;
    } catch (err) {
      console.error(`Failed to connect to MongoDB, retries left ${--retries}`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  console.error("All MongoDB connection attempts failed, Exiting...");
  process.exit(1);
};
