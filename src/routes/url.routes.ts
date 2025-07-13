import { Router } from "express";
import urlController from "@controllers/url.controller";
import { visitCounter } from "@middlewares/analytics.middleware";

const router = Router();

router.get("/:urlKey", visitCounter, urlController.getRedirectUrl);
router.post("/shorten", urlController.getShortendUrl);

export default router;
