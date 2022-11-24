import { Router } from "express";
import { handleEmailCreation } from "../controllers/email.controllers";
import { verifySerialization } from "../middlewares/verifySerialization.middleware";
import { createEmailSerializer } from "../serializers";

export const emailRoutes = Router();

emailRoutes.post(
  "",
  verifySerialization(createEmailSerializer),
  handleEmailCreation
);
