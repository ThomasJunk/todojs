// SPDX-License-Identifier: MIT
import helmet from "helmet";
import morgan from "morgan";

const configureMiddeware = app => {
  app.use(helmet());
  app.use(
    morgan(
      ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'
    )
  );
};

export { configureMiddeware };
