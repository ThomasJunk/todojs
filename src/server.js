// SPDX-License-Identifier: MIT
import express from "express";
import winston from "winston";

import { configureMiddeware } from "./middleware";
import { configureRoutes } from "./routes";
import { TodoService } from "./todo";
import { UserService } from "./user";
import { DB } from "./db";
import configuration from "./configuration";

const consoleTransport = new winston.transports.Console();
const myWinstonOptions = {
  transports: [consoleTransport]
};
const logger = new winston.createLogger(myWinstonOptions);

const app = express();

const todoService = TodoService(DB(), logger);
const userService = UserService(DB(), logger);

const services = {
  todoService: todoService,
  userService: userService
};

configureMiddeware(app);
configureRoutes({ app, services, logger });

app.listen(configuration.PORT, () =>
  logger.info(`Example app listening on port ${configuration.PORT}!`)
);
