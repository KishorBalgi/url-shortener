import cron from "node-cron";
import urlService from "@services/url.service";
import { getRedisClient } from "@config/redis";

const FLUSH_INTERVAL = "*/5 * * * *";

cron.schedule(FLUSH_INTERVAL, async () => {
  try {
    console.log("Starting visit count flush...");
    const redisClient = getRedisClient();

    const vistCounts = await redisClient.keys("visits:*");

    for (const visit of vistCounts) {
      const key = visit.split(":")[1];
      const count = parseInt((await redisClient.get(visit)) || "0");

      if (count == 0) continue;

      await urlService.updateVisitCount(key, count);

      await redisClient.del(visit);
    }
    console.log(`Completed visit count flush...`);
  } catch (err) {
    console.error(`Error occured during analytics flush: ${err}`);
  }
});
