const { StatusCodes } = require("http-status-codes");

function errorHandler(err, req, res, next) {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
}

module.exports = (app) => {
  app.use(errorHandler);
};
