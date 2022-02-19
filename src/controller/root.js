const root = require("express").Router({ mergeParams: true });
const userRouter = require("./user/router");
const authMiddleware = require("../middleware/auth");

authMiddleware(root);
userRouter(root);

module.exports = (app) => {
  app.use("/", root);
};
