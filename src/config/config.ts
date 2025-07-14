import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  mongoUrl: string;
  redisUrl: string;
  domain: string;
  machineId: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || "developmet",
  mongoUrl: process.env.MONGO_URL || "",
  redisUrl: process.env.REDIS_URL || "",
  domain: process.env.DOMAIN || "http://localhost:3000",
  machineId: process.env.MACHINE_ID || "DEV",
};

export default config;
