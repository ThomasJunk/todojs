// SPDX-License-Identifier: MIT
import homeRoute from "./home";

const home = homeRoute();

const configureRoutes = ({ app, services, logger }) => {
  app.get("/", home.Get);
};

export { configureRoutes };
