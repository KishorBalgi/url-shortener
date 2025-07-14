import { Request, Response, NextFunction } from "express";
import urlServices from "@services/url.service";
import config from "@config/config";
import { getRedisClient } from "@config/redis";
import { AppError } from "@utils/appError";
import { sendResponse } from "@utils/api";
import { IUrl } from "@models/url.model";
import { generateBase62Key } from "@utils/tools";

const getShortendUrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { longUrl } = req.body;

  const newUrl: Partial<IUrl> = {
    urlKey: generateBase62Key(),
    redirectUrl: longUrl,
  };

  const url = await urlServices.createShortUrl(newUrl);

  sendResponse(res, 201, {
    shortenedUrl: `${config.domain}/${url.urlKey}`,
    ...url,
  });
};

const getRedirectUrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { urlKey } = req.params;
  const redis = getRedisClient();

  const cachedRedirectUrl = await redis.get(`redirect-url:${urlKey}`);

  if (cachedRedirectUrl) {
    return res.redirect(cachedRedirectUrl);
  }

  const url = await urlServices.getRedirectUrl(urlKey);

  if (!url) {
    return next(new AppError(404, "This URL does not exits"));
  }

  await redis.set(`redirect-url:${urlKey}`, url.redirectUrl, "EX", 300);

  res.redirect(url.redirectUrl);
};

export default { getShortendUrl, getRedirectUrl };
