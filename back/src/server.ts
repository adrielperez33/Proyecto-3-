import express from "express";
require("dotenv").config();
import router from "./routes/index";
import morgan from "morgan";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use(router);

export default server;
