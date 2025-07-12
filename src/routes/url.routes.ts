import { Router } from "express";
import urlController from "@controllers/url.controller";

const router = Router();

router.get("/:urlKey", urlController.getRedirectUrl);
router.post("/shorten", urlController.getShortendUrl);

export default router;
