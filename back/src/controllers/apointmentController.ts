import { Request, Response } from "express";
import Iturno from "../interfaces/apoimentInterfaces";
import {
  cancelTurnoById,
  createTurnos,
  getAllTurnosServices,
  getTurnosId,
} from "../services/apoimentServices";
import TurnoDto from "../dto/apoimentDto";

export const getApoimentControllerToAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const turnos: Iturno[] = await getAllTurnosServices();
    res.status(200).json(turnos);
  } catch (error) {
    console.error("Error al obtener todos los turnos:", error);
    res.status(404).json({ message: "Hubo un error al obtener los turnos" });
  }
};


export const getApoimentEspecifico = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const turno: Iturno | null = await getTurnosId(Number(id));

    if (turno !== null) {
      res.status(200).json(turno);
    } else {
      res.status(404).json({ message: "Turno no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el turno específico:", error);
    res.status(404).json({ message: "Hubo un error al obtener el turno" });
  }
};

export const agendarTurno = async (req: Request, res: Response): Promise<void> => {
  const { fecha, time, status, usuarioId } = req.body;
  const turnoDto: TurnoDto = { fecha, time, status, usuarioId };

  try {
    const turno = await createTurnos(turnoDto);
    res.status(201).send(turno);
  } catch (error) {
    if (error instanceof Error && error.message === "Usuario no encontrado") {
      res.status(400).send({ message: "No se encontró usuario para agendar turno. Regístrese o ingrese y después agende el turno" });
    } else if (error instanceof Error && error.message === "Faltan datos necesarios para crear el turno") {
      res.status(400).send({ message: "Faltan datos" });
    }
    else  {
      console.error("Error al crear el turno:", error);
      res.status(400).send({ message: "Hubo un error con el registro" });
    }
  }
}

export const cancelarTurno = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const turno = await cancelTurnoById(Number(id));

    res.status(200).json(turno);
  } catch (error) {
    console.error("Error al cancelar el turno:", error);
    res.status(404).json({ message: "Hubo un error al cancelar el turno" });
  }
};