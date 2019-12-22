// SPDX-License-Identifier: MIT
import uuidv4 from "uuid/v4";

const Todo = ({ id, content, completed }) => {
  id = id || uuidv4();
  completed = completed || false;
  return {
    id: "",
    content: content,
    completed: "",
    isComplete() {
      return this.completed;
    }
  };
};

export { Todo };
