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
exports.userLogin = exports.userRegister = exports.getUserId = exports.getUserToAll = void 0;
const userServices_1 = require("../services/userServices");
const userServices_2 = require("../services/userServices");
const credentialServices_1 = require("../services/credentialServices");
const getUserToAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userServices_1.getAllUserServices)();
    res.status(200).json(users);
});
exports.getUserToAll = getUserToAll;
const getUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield (0, userServices_2.getUserIdServices)(Number(id));
    if (user !== null) {
        res.status(200).json(user);
    }
    else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
});
exports.getUserId = getUserId;
const userRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, nombre, email, birthdate, nDni, credentialsId, turnos } = req.body;
    const userDto = { username, password, nombre, email, birthdate: new Date(birthdate), nDni, credentialsId, turnos };
    try {
        const user = yield (0, userServices_1.createUser)(userDto);
        res.status(201).send(user);
    }
    catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(400).send({ message: "Hubo un error con el registro" });
    }
});
exports.userRegister = userRegister;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const logeado = yield (0, credentialServices_1.loginCredential)(username, password);
        res.status(200).send(logeado);
    }
    catch (error) {
        console.log("Error al loguearse", error);
        res.status(400).send({ message: "No se pudo loguear correctamente" });
    }
});
exports.userLogin = userLogin;
