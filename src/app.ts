import express from "express";
import urlRoutes from "@routes/url.routes";

import { globalErrorHandler } from "@middlewares/error.middleware";
import { rateLimiter } from "@middlewares/rateLimiter.middleware";
import "@jobs/analyticsFlush.job";

const app = express();

app.use(express.json());

app.use(
  rateLimiter({
    windowSize: 60,
    maxRequests: 200,
  })
);

app.use("/", urlRoutes);

app.use(globalErrorHandler);

export default app;
