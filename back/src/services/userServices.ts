import IUsuario from "./../interfaces/userInterfaces";
import { nuevaCredencial,} from "./credentialServices";
import { AppDataSource } from "../config/data-source";
import Usuario from "../entities/UserEntiity";
import UserDto from "../dto/userDto";
import Credential from "../entities/CredentialEntity";
import Turnos from "../entities/TurnosEntitiy";
import { createTurnos } from "./apoimentServices";
import TurnoDto from "../dto/apoimentDto";

export const getAllUserServices = async () => {
  const users = await AppDataSource.getRepository(Usuario).find({
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
};

export const getUserIdServices = async (idUser: number): Promise<IUsuario | null> => {
  const user = await AppDataSource.getRepository(Usuario).findOne({
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
  } else {
    return null;
  }
};

export const createUser = async ({
  username,
  password,
  nombre,
  email,
  birthdate,
  nDni,
  turnos = [],
}: UserDto): Promise<Usuario> => {
  const userRepository = AppDataSource.getRepository(Usuario);
  const credentialRepository = AppDataSource.getRepository(Credential);

  const newCredential = credentialRepository.create({
    username: username,
    password: password,
  });

  await credentialRepository.save(newCredential);

  const newUser = userRepository.create({
    nombre,
    email,
    birthdate,
    nDni,
    credentials: newCredential,
  });

  await userRepository.save(newUser);
  if (turnos && turnos.length > 0) {
    for (const turno of turnos) {
      const turnoDto: TurnoDto = {
        fecha: turno.fecha,
        time: turno.time,
        status: turno.status,
        usuarioId: newUser.idUser, 
      };
      await createTurnos(turnoDto);
    }
  }

  return newUser;
};