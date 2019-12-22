// SPDX-License-Identifier: MIT
import { Repository } from "./repository";
import { Service } from "./service";

const UserService = (db, logger) => {
  const repo = Repository(db, logger);
  return Service(repo, logger);
};

export { UserService };
