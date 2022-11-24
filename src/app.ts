import * as dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import express, { json } from "express";
import cors, { CorsOptions } from "cors";
import { appRoutes } from "./routes";
import { handleErrorMiddleware } from "./middlewares";

const app = express();
app.use(json());

const corsOptions: CorsOptions = {
  origin: process.env.CORS_ORIGIN,
};

app.use(cors(corsOptions));

appRoutes(app);

app.use(handleErrorMiddleware);

export default app;
