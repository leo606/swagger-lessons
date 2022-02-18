const router = require("express").Router({ mergeParams: true });
const getUser = require("./get");

getUser(router);

module.exports = (root) => {
  root.use("/user", router);
};
