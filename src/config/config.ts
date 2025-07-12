import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  mongoUrl: string;
  redisUrl: string;
  domain: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "developmet",
  mongoUrl: process.env.MONGO_URL || "",
  redisUrl: process.env.REDIS_URL || "",
  domain: process.env.DOMAIN || "http://localhost:3000",
};

export default config;
