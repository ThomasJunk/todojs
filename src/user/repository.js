// SPDX-License-Identifier: MIT
const Repository = (db, logger) => {
  return {
    list() {
      return db.list();
    },
    add(todo) {
      return db.add(todo);
    },
    save(todo) {
      return db.save(todo);
    },
    delete(todo) {
      return db.delete(todo);
    }
  };
};

export { Repository };
