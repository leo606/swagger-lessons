function authMiddleware(req, res, next) {
  const { authorization } = req.headers;

  if (authorization === "mysecret") {
    return next();
  } else {
    next({ code: "UNAUTHORIZED", message: "invalid token" });
  }
}

module.exports = (router) => {
  router.use(authMiddleware);
};
