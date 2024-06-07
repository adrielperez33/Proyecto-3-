import { Router } from "express";
import {getApoimentEspecifico, agendarTurno, cancelarTurno, } from "../controllers/apointmentController"
import validateTimeMiddleware from "../middlewares/TurnoEnHorario";

const appoiment: Router = Router();

appoiment.get("/:id", getApoimentEspecifico)
appoiment.post("/schedule",validateTimeMiddleware, agendarTurno)
appoiment.put("/cancel/:id", cancelarTurno)



export default appoiment;