import express from "express";
require("dotenv").config();
import router from "./routes/index";
import morgan from "morgan";

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(router);

export default server;
