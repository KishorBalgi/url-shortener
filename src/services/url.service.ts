import Url, { IUrl } from "@models/url.model";
import { AppError } from "@utils/appError";

const createShortUrl = async (url: Partial<IUrl>): Promise<IUrl> => {
  const urlExists = await Url.findOne({
    urlKey: url.urlKey,
  });

  if (urlExists) {
    throw new AppError(
      400,
      `Url with shortened key: ${url.urlKey} already exists`
    );
  }

  const newUrl = await Url.create(url);

  return newUrl.toObject();
};

const getRedirectUrl = async (urlKey: string): Promise<IUrl | null> => {
  const url = await Url.findOne({
    urlKey: urlKey,
  });

  return url;
};

const updateVisitCount = async (
  urlKey: string,
  count: number
): Promise<void> => {
  await Url.findOneAndUpdate(
    {
      urlKey: urlKey,
    },
    {
      $inc: {
        visitCount: count,
      },
    }
  );
};

export default {
  createShortUrl,
  getRedirectUrl,
  updateVisitCount,
};
