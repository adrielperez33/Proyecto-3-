import { Router } from "express";
import {getApoimentControllerToAll, } from "../controllers/apointmentController";

const appoiments: Router = Router();

appoiments.get("/", getApoimentControllerToAll)

export default appoiments