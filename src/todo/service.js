// SPDX-License-Identifier: MIT
const Service = (repository, logger) => {
  return {
    list() {
      return repository.list();
    },
    getOne(id) {
      return repository.getOne(id);
    },
    add(todo) {
      return repository.add(todo);
    },
    save(todo) {
      return repository.save(todo);
    },
    delete(todo) {
      return repository.delete(todo);
    }
  };
};

export { Service };
