"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apointmentController_1 = require("../controllers/apointmentController");
const appoiment = (0, express_1.Router)();
appoiment.get("/:id", apointmentController_1.getApoimentEspecifico);
appoiment.post("/schedule", apointmentController_1.agendarTurno);
appoiment.put("/cancel/:id", apointmentController_1.cancelarTurno);
exports.default = appoiment;
