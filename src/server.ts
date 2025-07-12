import app from "./app";
import config from "@config/config";
import { connectDB } from "@config/db";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(config.port, () => {
      console.log(`Server listening on port : ${config.port}`);
    });
  } catch (err) {
    console.error("Server start-up failed", err);
    process.exit(1);
  }
};

startServer();
