const express = require("express");
const helmet = require("helmet");

const dishesRouter = require("./routes/dishesRouter");
const recipesRouter = require("./routes/recipesRouter");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/dishes", dishesRouter);
server.use("/api/recipes", recipesRouter);

module.exports = server;
