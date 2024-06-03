import Iturno from "./../interfaces/apoimentInterfaces";
import Turnos from "../entities/TurnosEntitiy";
import Usuario from "./../entities/UserEntiity";
import { AppDataSource } from "../config/data-source";
import TurnoDto from "../dto/apoimentDto";

export const getAllTurnosServices = async (): Promise<Iturno[]> => {
  const turnosRepository = AppDataSource.getRepository(Turnos);
  const turnos = await turnosRepository.find({
    relations: ["usuario"],
  });

  return turnos.map((turno) => ({
    IdTurnos: turno.IdTurnos,
    fecha: turno.fecha,
    time: turno.time,
    status: turno.status,
    usuario: turno.usuario,
  }));
};

export const getTurnosId = async (IdTurnos: number): Promise<Iturno | null> => {
  const turnosRepository = AppDataSource.getRepository(Turnos);
  const turno = await turnosRepository.findOne({
    where: { IdTurnos },
    relations: ["usuario"],
  });

  if (turno) {
    return {
      IdTurnos: turno.IdTurnos,
      fecha: turno.fecha,
      time: turno.time,
      status: turno.status,
      usuario: turno.usuario,
    };
  } else {
    return null;
  }
};

export const createTurnos = async ({
  fecha,
  time,
  usuarioId,
}: TurnoDto): Promise<Turnos> => {
  if (!fecha || !time || !usuarioId) {
    throw new Error("Faltan datos necesarios para crear el turno");
  }

  const userRepository = AppDataSource.getRepository(Usuario);
  const turnosRepository = AppDataSource.getRepository(Turnos);

  const usuario = await userRepository.findOne({
    where: { idUser: usuarioId },
  });

  if (!usuario) {
    console.log("Usuario no encontrado");
    throw new Error("Usuario no encontrado");
  }

  const newTurn = turnosRepository.create({
    fecha,
    time,
    status: true,
    usuario,
  });

  await turnosRepository.save(newTurn);

  return newTurn;
};

export const cancelTurnoById = async (
  IdTurnos: number
): Promise<Turnos | null> => {
  const turnosRepository = AppDataSource.getRepository(Turnos);
  const turno = await turnosRepository.findOne({ where: { IdTurnos } });

  if (!turno) {
    throw new Error("Turno no encontrado");
  }

  turno.status = false;
  await turnosRepository.save(turno);

  return turno;
};
