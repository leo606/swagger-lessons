const root = require("express").Router({ mergeParams: true });
const userRouter = require("./user/router");

userRouter(root);

module.exports = (app) => {
  app.use("/", root);
};
