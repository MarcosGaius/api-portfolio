import { Express } from "express";
import { emailRoutes } from "./email.routes";

export const appRoutes = (app: Express) => {
  app.use("/emails", emailRoutes);
};
