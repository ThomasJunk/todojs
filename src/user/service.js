// SPDX-License-Identifier: MIT
import { argon2d } from "argon2";
import cryproRandomString from "crypto-random-string";

import User from "./user";

const Service = (repository, logger) => {
  return {
    list() {
      return repository.list();
    },
    add(todo) {
      return repository.add(todo);
    },
    save(todo) {
      return repository.save(todo);
    },
    delete(todo) {
      return repository.delete(todo);
    },
    clearPassword(user) {
      user.password = "";
      return user;
    },
    async createUser({ login, password }) {
      try {
        const hash = await argon2d.hash(password);
        const user = User({ login: login, password: hash });
        repository.save(user);
        return this.clearPassword(user);
      } catch (err) {
        logger.error(err);
      }
    },
    async grantLogin({ login, password }) {
      try {
        const user = repository.getUserByLogin(login);
        const fakePW = cryproRandomString({ length: 10, type: "url-safe" });
        const fakeHash = await argon2d.hash(fakePW);
        if (!user) return false;
        if (await argon2.verify(user.password, password)) {
          return true;
        } else {
          await argon2.verify(fakeHash, password);
          return false;
        }
      } catch (err) {
        logger.error(err);
      }
    }
  };
};

export { Service };
