import { useState, useEffect } from "react";
import Turno from "../components/UnTurno";
import style from "../Styles/MisTurnos.module.css";
import axios from "axios";

const MisTurnos = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:3001/appointments").then((res) => setTurnos(res.data))
  }, [])

  return (
    <>
      <h1 className={style.title}>Mis Turnos</h1>
      <p>aclaracion: es importante que los turnos se soliciten en un horario posible( de 8 am a 18 pm)</p>
      <div className={style.turnosContainer}>
        {turnos.map((turno) => (
          <Turno key={turno.IdTurnos} {...turno} />
        ))}
      </div>
    </>
  );
};

export default MisTurnos;
