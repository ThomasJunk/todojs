// SPDX-License-Identifier: MIT
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import session from "express-session";

const configureMiddeware = ({ app, config }) => {
  app.use(helmet());
  app.use(
    morgan(
      ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'
    )
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  const sessionConfig = {
    secret: config.COOKIE_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false
  };

  if (app.get("env") === "production") {
    app.set("trust proxy", 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
  }
  app.use(session(sessionConfig));
};

export { configureMiddeware };
