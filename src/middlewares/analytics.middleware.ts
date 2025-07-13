import { getRedisClient } from "@config/redis";
import { Request, Response, NextFunction } from "express";

export const visitCounter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const redisClient = getRedisClient();
    const { urlKey } = req.params;
    await redisClient.incr(`visits:${urlKey}`);
    next();
  } catch (err) {
    console.error(`Visit counter error: ${err}`);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};
