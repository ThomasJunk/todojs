// SPDX-License-Identifier: MIT
import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT,
  COOKIE_SECRET: process.env.COOKIE_SECRET
};
