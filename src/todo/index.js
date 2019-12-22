// SPDX-License-Identifier: MIT
import { Repository } from "./repository";
import { Service } from "./service";

const TodoService = (db, logger) => {
  const repo = Repository(db, logger);
  return Service(repo, logger);
};

export { TodoService };
