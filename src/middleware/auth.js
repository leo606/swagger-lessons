function authMiddleware(req, res, next) {
  console.log("auth middle");
  next();
}

module.exports = (router) => {
  router.use(authMiddleware);
};
