import { Router } from "express";
import {getApoimentEspecifico, agendarTurno, cancelarTurno, } from "../controllers/apointmentController"

const appoiment: Router = Router();

appoiment.get("/:id", getApoimentEspecifico)
appoiment.post("/schedule", agendarTurno)
appoiment.put("/cancel/:id", cancelarTurno)



export default appoiment;