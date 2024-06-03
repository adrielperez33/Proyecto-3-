import { Request, Response } from "express";
import ICredential from "../interfaces/credentialInterfaces";
import { error } from "console";
import { AppDataSource } from "../config/data-source";
import Credential from "../entities/CredentialEntity";
import { getUserId } from "../controllers/userControllers";
import { getUserIdServices } from "./userServices";


export const nuevaCredencial = async (newCredential: Credential): Promise<Credential> => {
  const savedCredential = await AppDataSource.getRepository(Credential).save(newCredential);
  return savedCredential;
};

export const loginCredential = async (username: string, password: string) => {
  const credencial = await AppDataSource.getRepository(Credential).findOne({
    where: { username, password }
  });

  if (credencial) {
    const id = credencial.idCredential;
    const user = await getUserIdServices(Number(id)); 

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
};