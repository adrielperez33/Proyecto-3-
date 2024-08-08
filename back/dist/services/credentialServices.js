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
exports.loginCredential = exports.nuevaCredencial = void 0;
const data_source_1 = require("../config/data-source");
const CredentialEntity_1 = __importDefault(require("../entities/CredentialEntity"));
const userServices_1 = require("./userServices");
const nuevaCredencial = (newCredential) => __awaiter(void 0, void 0, void 0, function* () {
    const savedCredential = yield data_source_1.AppDataSource.getRepository(CredentialEntity_1.default).save(newCredential);
    return savedCredential;
});
exports.nuevaCredencial = nuevaCredencial;
const loginCredential = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credencial = yield data_source_1.AppDataSource.getRepository(CredentialEntity_1.default).findOne({
        where: { username, password }
    });
    if (credencial) {
        const id = credencial.idCredential;
        const user = yield (0, userServices_1.getUserIdServices)(Number(id));
        if (user) {
            return {
                login: true,
                user: {
                    idUser: user.idUser,
                    nombre: user.nombre,
                    email: user.email,
                    birthdate: user.birthdate,
                    nDni: user.nDni,
                    turnos: user.turnos
                }
            };
        }
    }
    return { login: false };
});
exports.loginCredential = loginCredential;
