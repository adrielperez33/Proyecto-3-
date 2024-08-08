"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apointmentController_1 = require("../controllers/apointmentController");
const TurnoEnHorario_1 = __importDefault(require("../middlewares/TurnoEnHorario"));
const appoiment = (0, express_1.Router)();
appoiment.get("/:id", apointmentController_1.getApoimentEspecifico);
appoiment.post("/schedule", TurnoEnHorario_1.default, apointmentController_1.agendarTurno);
appoiment.put("/cancel/:id", apointmentController_1.cancelarTurno);
exports.default = appoiment;
