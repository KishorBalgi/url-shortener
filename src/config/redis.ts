// src/config/redis.ts
import Redis from "ioredis";
import config from "./config";

const REDIS_URL = config.redisUrl;

let redis: Redis | null = null;

export const connectRedis = async () => {
  try {
    redis = new Redis(REDIS_URL, {
      retryStrategy: (times) => {
        const delay = Math.min(times * 100, 3000);
        console.warn(
          `Redis reconnect attempt #${times}, retrying in ${delay}ms`
        );
        return delay;
      },
    });

    await new Promise<void>((resolve, reject) => {
      redis?.once("ready", () => {
        console.log("Redis connected and ready");
        resolve();
      });

      redis?.once("error", (err) => {
        console.error("Redis connection error:", err.message);
        reject(err);
      });
    });

    redis.on("error", (err) => {
      console.error("Redis runtime error:", err.message);
    });

    redis.on("close", () => {
      console.warn("Redis connection closed");
    });

    redis.on("reconnecting", (delay: number) => {
      console.log(`Redis reconnecting in ${delay}ms...`);
    });

    return redis;
  } catch (err) {
    console.error("Failed to connect to Redis");
    throw err;
  }
};

export const getRedisClient = () => {
  if (!redis) {
    throw new Error("Redis not connected yet");
  }
  return redis;
};
