import { Request, Response } from "express";
import IUsuario from "../interfaces/userInterfaces";
import { createUser, getAllUserServices } from "../services/userServices";
import { getUserIdServices } from "../services/userServices"
import UserDto from "../dto/userDto";
import { loginCredential } from "../services/credentialServices";

export const getUserToAll = async (req: Request, res: Response): Promise<void> => {
  const users: IUsuario[] = await getAllUserServices();
  res.status(200).json(users);
};

export const getUserId = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const user: IUsuario | null = await getUserIdServices(Number(id));

  if (user !== null) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

export const userRegister = async (req: Request, res: Response): Promise<void> => {
  const { username, password, nombre, email, birthdate, nDni, credentialsId, turnos } = req.body;
  const userDto: UserDto = { username, password, nombre, email, birthdate: new Date(birthdate), nDni, credentialsId, turnos};
  
  try {
      const user = await createUser(userDto);
      res.status(201).send(user);
  } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(400).send({ message:"Hubo un error con el registro" });
  }
};

export const userLogin = async (req: Request, res: Response): Promise<void>  =>{
  const { username, password } = req.body
  try {
    const logeado = await loginCredential(username, password)
    res.status(200).send(logeado)
  } catch (error) {
    console.log("Error al loguearse", error);
    res.status(400).send({message: "No se pudo loguear correctamente"})
  }
}