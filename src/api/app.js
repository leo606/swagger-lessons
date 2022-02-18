const express = require("express");
const rootRouter = require("../controller/root");

const app = express();

app.use(express.json());

rootRouter(app);

module.exports = app;
