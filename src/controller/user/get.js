const { StatusCodes } = require("http-status-codes");

/**
 * @swagger
 * /user:
 *  get:
 *    description: get user
 *    parameters:
 *      - name: user name
 *        in: formData
 *        required: false
 *        type: string
 *    responses:
 *      200:
 *        description: Returns a mysterious user.
 *
 */

const getUserHandler = (req, res, next) => {
  res.status(StatusCodes.OK).json({ user: "sdfasdfasf" });
};

module.exports = (router) => {
  router.get("/", getUserHandler);
};
