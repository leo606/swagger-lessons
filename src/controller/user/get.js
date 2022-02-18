const { StatusCodes } = require("http-status-codes");

const getUserHandler = (req, res, next) => {
  res.status(StatusCodes.OK).json({ user: "sdfasdfasf" });
};

module.exports = (router) => {
  router.get("/", getUserHandler);
};
