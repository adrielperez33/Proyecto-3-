import { DataSource } from "typeorm"
import  Usuario  from "../entities/UserEntiity"
import Credential from "../entities/CredentialEntity"
import Turnos from "../entities/TurnosEntitiy"
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "../config/envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    dropSchema: false,
    synchronize: true,
    logging: false,
    entities: [Usuario, Credential, Turnos],
    subscribers: [],
    migrations: [],
})