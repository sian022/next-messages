import http from "http";
import express from "express";
import "./config/logging";
import { loggingHandler } from "./middleware/loggingHandler";
import { corsHandler } from "./middleware/corsHandler";
import { routeNotFound } from "./middleware/routeNotFound";
import { SERVER_HOSTNAME, SERVER_PORT } from "./config/config";
import e from "express";

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
  logging.info("--------------------------------");
  logging.info("Initializing API Server");
  logging.info("--------------------------------");
  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());

  logging.info("--------------------------------");
  logging.info("Logging & Configuration");
  logging.info("--------------------------------");
  application.use(loggingHandler);
  application.use(corsHandler);

  logging.info("--------------------------------");
  logging.info("Define Controller Routing");
  logging.info("--------------------------------");
  application.get("/main/healthcheck", (req, res, next) => {
    return res.status(200).json({ message: "API is up and running" });
  });

  logging.info("--------------------------------");
  logging.info("Define Controller Routing");
  logging.info("--------------------------------");
  application.use(routeNotFound);

  logging.info("--------------------------------");
  logging.info("Start Server");
  logging.info("--------------------------------");
  httpServer = http.createServer(application);
  httpServer.listen(SERVER_PORT, () => {
    logging.info("--------------------------------");
    logging.info("Server started: " + SERVER_HOSTNAME);
    logging.info("--------------------------------");
  });
};

export const Shutdown = (callback: any) =>
  httpServer && httpServer.close(callback);

Main();
