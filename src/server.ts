import "module-alias/register";
import app from "./app";
import config from "@config/config";
import { connectDB } from "@config/db";
import { connectRedis } from "@config/redis";

const startServer = async () => {
  try {
    await connectDB();
    await connectRedis();

    app.listen(config.port, () => {
      console.log(`Server listening on port : ${config.port}`);
    });
  } catch (err) {
    console.error("Server start-up failed", err);
    process.exit(1);
  }
};

startServer();
