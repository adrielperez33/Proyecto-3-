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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelTurnoById = exports.createTurnos = exports.getTurnosId = exports.getAllTurnosServices = void 0;
const TurnosEntitiy_1 = __importDefault(require("../entities/TurnosEntitiy"));
const UserEntiity_1 = __importDefault(require("./../entities/UserEntiity"));
const data_source_1 = require("../config/data-source");
const getAllTurnosServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const turnosRepository = data_source_1.AppDataSource.getRepository(TurnosEntitiy_1.default);
    const turnos = yield turnosRepository.find({
        relations: ["usuario"],
    });
    return turnos.map((turno) => ({
        IdTurnos: turno.IdTurnos,
        fecha: turno.fecha,
        time: turno.time,
        status: turno.status,
        usuario: turno.usuario,
    }));
});
exports.getAllTurnosServices = getAllTurnosServices;
const getTurnosId = (IdTurnos) => __awaiter(void 0, void 0, void 0, function* () {
    const turnosRepository = data_source_1.AppDataSource.getRepository(TurnosEntitiy_1.default);
    const turno = yield turnosRepository.findOne({
        where: { IdTurnos },
        relations: ["usuario"],
    });
    if (turno) {
        return {
            IdTurnos: turno.IdTurnos,
            fecha: turno.fecha,
            time: turno.time,
            status: turno.status,
            usuario: turno.usuario,
        };
    }
    else {
        return null;
    }
});
exports.getTurnosId = getTurnosId;
const createTurnos = (_a) => __awaiter(void 0, [_a], void 0, function* ({ fecha, time, usuarioId, }) {
    if (!fecha || !time || !usuarioId) {
        throw new Error("Faltan datos necesarios para crear el turno");
    }
    const userRepository = data_source_1.AppDataSource.getRepository(UserEntiity_1.default);
    const turnosRepository = data_source_1.AppDataSource.getRepository(TurnosEntitiy_1.default);
    const usuario = yield userRepository.findOne({
        where: { idUser: usuarioId },
    });
    if (!usuario) {
        console.log("Usuario no encontrado");
        throw new Error("Usuario no encontrado");
    }
    const newTurn = turnosRepository.create({
        fecha,
        time,
        status: true,
        usuario,
    });
    yield turnosRepository.save(newTurn);
    return newTurn;
});
exports.createTurnos = createTurnos;
const cancelTurnoById = (IdTurnos) => __awaiter(void 0, void 0, void 0, function* () {
    const turnosRepository = data_source_1.AppDataSource.getRepository(TurnosEntitiy_1.default);
    const turno = yield turnosRepository.findOne({ where: { IdTurnos } });
    if (!turno) {
        throw new Error("Turno no encontrado");
    }
    turno.status = false;
    yield turnosRepository.save(turno);
    return turno;
});
exports.cancelTurnoById = cancelTurnoById;
