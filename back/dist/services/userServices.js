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
exports.createUser = exports.getUserIdServices = exports.getAllUserServices = void 0;
const data_source_1 = require("../config/data-source");
const UserEntiity_1 = __importDefault(require("../entities/UserEntiity"));
const CredentialEntity_1 = __importDefault(require("../entities/CredentialEntity"));
const apoimentServices_1 = require("./apoimentServices");
const getAllUserServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.AppDataSource.getRepository(UserEntiity_1.default).find({
        relations: {
            credentials: true,
            turnos: true
        }
    });
    return users.map(user => ({
        idUser: user.idUser,
        nombre: user.nombre,
        username: user.credentials.username,
        email: user.email,
        birthdate: user.birthdate,
        nDni: user.nDni,
        credentialsId: user.credentials.idCredential,
        turnos: user.turnos
    }));
});
exports.getAllUserServices = getAllUserServices;
const getUserIdServices = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.AppDataSource.getRepository(UserEntiity_1.default).findOne({
        where: { idUser },
        relations: ['credentials', 'turnos']
    });
    if (user) {
        return {
            idUser: user.idUser,
            nombre: user.nombre,
            email: user.email,
            birthdate: user.birthdate,
            nDni: user.nDni,
            credentialsId: user.credentials.idCredential,
            turnos: user.turnos
        };
    }
    else {
        return null;
    }
});
exports.getUserIdServices = getUserIdServices;
const createUser = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, password, nombre, email, birthdate, nDni, turnos = [], }) {
    const userRepository = data_source_1.AppDataSource.getRepository(UserEntiity_1.default);
    const credentialRepository = data_source_1.AppDataSource.getRepository(CredentialEntity_1.default);
    const newCredential = credentialRepository.create({
        username: username,
        password: password,
    });
    yield credentialRepository.save(newCredential);
    const newUser = userRepository.create({
        nombre,
        email,
        birthdate,
        nDni,
        credentials: newCredential,
    });
    yield userRepository.save(newUser);
    if (turnos && turnos.length > 0) {
        for (const turno of turnos) {
            const turnoDto = {
                fecha: turno.fecha,
                time: turno.time,
                status: turno.status,
                usuarioId: newUser.idUser,
            };
            yield (0, apoimentServices_1.createTurnos)(turnoDto);
        }
    }
    return newUser;
});
exports.createUser = createUser;
