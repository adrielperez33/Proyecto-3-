"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelarTurno = exports.agendarTurno = exports.getApoimentEspecifico = exports.getApoimentControllerToAll = void 0;
const apoimentServices_1 = require("../services/apoimentServices");
const getApoimentControllerToAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turnos = yield (0, apoimentServices_1.getAllTurnosServices)();
        res.status(200).json(turnos);
    }
    catch (error) {
        console.error("Error al obtener todos los turnos:", error);
        res.status(404).json({ message: "Hubo un error al obtener los turnos" });
    }
});
exports.getApoimentControllerToAll = getApoimentControllerToAll;
const getApoimentEspecifico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const turno = yield (0, apoimentServices_1.getTurnosId)(Number(id));
        if (turno !== null) {
            res.status(200).json(turno);
        }
        else {
            res.status(404).json({ message: "Turno no encontrado" });
        }
    }
    catch (error) {
        console.error("Error al obtener el turno específico:", error);
        res.status(404).json({ message: "Hubo un error al obtener el turno" });
    }
});
exports.getApoimentEspecifico = getApoimentEspecifico;
const agendarTurno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fecha, time, status, usuarioId } = req.body;
    const turnoDto = { fecha, time, status, usuarioId };
    try {
        const turno = yield (0, apoimentServices_1.createTurnos)(turnoDto);
        res.status(201).send(turno);
    }
    catch (error) {
        if (error instanceof Error && error.message === "Usuario no encontrado") {
            res.status(400).send({ message: "No se encontró usuario para agendar turno. Regístrese o ingrese y después agende el turno" });
        }
        else if (error instanceof Error && error.message === "Faltan datos necesarios para crear el turno") {
            res.status(400).send({ message: "Faltan datos" });
        }
        else {
            console.error("Error al crear el turno:", error);
            res.status(400).send({ message: "Hubo un error con el registro" });
        }
    }
});
exports.agendarTurno = agendarTurno;
const cancelarTurno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const turno = yield (0, apoimentServices_1.cancelTurnoById)(Number(id));
        res.status(200).json(turno);
    }
    catch (error) {
        console.error("Error al cancelar el turno:", error);
        res.status(404).json({ message: "Hubo un error al cancelar el turno" });
    }
});
exports.cancelarTurno = cancelarTurno;
