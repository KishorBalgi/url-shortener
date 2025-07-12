import express from "express";
import urlRoutes from "@routes/url.routes";
import analyticsRoutes from "@routes/analytics.routes";

import { globalErrorHandler } from "@middlewares/error.middleware";

const app = express();

app.use(express.json());

app.use("/", urlRoutes);
app.use("/analytics", analyticsRoutes);

app.use(globalErrorHandler);

export default app;
