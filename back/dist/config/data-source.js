"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const UserEntiity_1 = __importDefault(require("../entities/UserEntiity"));
const CredentialEntity_1 = __importDefault(require("../entities/CredentialEntity"));
const TurnosEntitiy_1 = __importDefault(require("../entities/TurnosEntitiy"));
const envs_1 = require("../config/envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USER,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [UserEntiity_1.default, CredentialEntity_1.default, TurnosEntitiy_1.default],
    subscribers: [],
    migrations: [],
});
