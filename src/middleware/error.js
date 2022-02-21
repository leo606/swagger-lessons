const { StatusCodes } = require("http-status-codes");

function errorHandler(err, req, res, next) {
  res.status(StatusCodes[err.code]).json({ message: err.message });
}

module.exports = (app) => {
  app.use(errorHandler);
};
