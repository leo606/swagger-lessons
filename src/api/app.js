const express = require("express");
const rootRouter = require("../controller/root");
const errorMiddleware = require("../middleware/error");
const swagger = require("../middleware/swagger");

const app = express();

app.use(express.json());

swagger(app);
rootRouter(app);
errorMiddleware(app);

module.exports = app;
