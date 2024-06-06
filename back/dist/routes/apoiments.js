"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apointmentController_1 = require("../controllers/apointmentController");
const appoiments = (0, express_1.Router)();
appoiments.get("/", apointmentController_1.getApoimentControllerToAll);
exports.default = appoiments;
