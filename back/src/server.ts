import express from "express";
require ("dotenv").config()
import router from "./routes/index";
import morgan from "morgan";

const server = express();

server.use(router)
server.use(express.json())
server.use(morgan("dev"))


export default server