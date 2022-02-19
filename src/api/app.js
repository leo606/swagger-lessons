const express = require("express");
const rootRouter = require("../controller/root");
const errorMiddleware = require("../middleware/error");

const app = express();

app.use(express.json());

rootRouter(app);
errorMiddleware(app);

module.exports = app;
