import { Router } from "express";
import {getApoimentEspecifico, agendarTurno, cancelarTurno} from "../controllers/apointmentController"

const appoiment: Router = Router();

appoiment.get("/", getApoimentEspecifico)
appoiment.post("/schedule", agendarTurno)
appoiment.put("/cancel", cancelarTurno)



export default appoiment;