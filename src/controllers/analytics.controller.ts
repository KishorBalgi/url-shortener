import { Request, Response, NextFunction } from "express";

const getUrlAnalytics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    status: "success",
  });
};

export default {
  getUrlAnalytics,
};
