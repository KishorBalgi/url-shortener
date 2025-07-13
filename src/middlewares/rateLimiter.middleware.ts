import { getRedisClient } from "@config/redis";
import { Request, Response, NextFunction } from "express";

interface IRateLimiterOptions {
  windowSize: number;
  maxRequests: number;
}

export const rateLimiter = (options: IRateLimiterOptions) => {
  const { windowSize, maxRequests } = options;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const redisClient = getRedisClient();
      const key = `rate-limit:${req.ip}`;

      const current = await redisClient.incr(key);

      if (current === 1) {
        await redisClient.expire(key, windowSize);
      }

      if (current > maxRequests) {
        const ttl = await redisClient.ttl(key);

        return res.status(429).json({
          message: "Too many requests. Please try again later.",
          retryAfterSeconds: ttl,
        });
      }

      next();
    } catch (err) {
      console.error("Rate limiter error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  };
};
