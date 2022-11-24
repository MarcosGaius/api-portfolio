import * as dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import express, { json } from "express";
import { appRoutes } from "./routes";
import { handleErrorMiddleware } from "./middlewares";

const app = express();
app.use(json());

appRoutes(app);

app.use(handleErrorMiddleware);

//criar um gmail que vai enviar email com o conteudo passado pela requisicao para meu protonmail

export default app;
