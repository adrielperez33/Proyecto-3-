import express from "express";
require("dotenv").config();
import router from "./routes/index";
import morgan from "morgan";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(router);
server.use(cors)

export default server;
