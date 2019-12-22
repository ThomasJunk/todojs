// SPDX-License-Identifier: MIT
import uuidv4 from "uuid/v4";

const User = ({ id, login, pass }) => {
  id = id || uuidv4();
  return {
    id: "",
    login: login,
    pass: pass
  };
};

export { User };
