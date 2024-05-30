import { promises } from "dns";
import { Request, Response } from "express";

export const getApoimentControllerToAll = async (req: Request, res: Response): Promise<void> => {
    res.status(200).send("estas en el get de turnos")
};

export const getApoimentEspecifico = async (req: Request, res: Response): Promise<void>  =>{
  res.status(200).send("estas en el get de turno especifico")
}

export const agendarTurno = async (req: Request, res: Response): Promise<void>  =>{
  res.status(200).send("estas en el post de agendar un nuevo turno")
};

export const cancelarTurno = async (req: Request, res:Response): Promise<void>  =>{
  res.status(200).send("estas en el put para cancelar turno")
};