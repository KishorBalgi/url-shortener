import { Router } from "express";
import analyticsController from "@controllers/analytics.controller";

const router = Router();

router.get("/:urlKey", analyticsController.getUrlAnalytics);

export default router;
