import cors from "cors";
import express from "express";
import helmet from "helmet";
import pino from "pino";
import pinoHttp from "pino-http";

import { healthRouter } from "./routes/health.js";

export const buildApp = () => {
  const app = express();
  const logger = pino({ name: "crown-api" });
  const httpLogger = (pinoHttp as unknown as (opts: { logger: pino.Logger }) => express.RequestHandler)({
    logger
  });

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(httpLogger);

  app.use("/api/v1", healthRouter);

  return app;
};
