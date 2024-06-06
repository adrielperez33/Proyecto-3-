import { useState, useEffect } from "react";
import turnos from "../helpers/myTurns";
import Turno from "../components/UnTurno"
import style from "../Styles/MisTurnos.module.css";

const MisTurnos = () => {
  const [useTurnos] = useState([]);
  useEffect(() =>{
    axios.get("")
  })
  return (
    <>
      <h1 className={style.title}>Mis Turnos</h1>
      <div className={style.turnosContainer}>
        {useTurnos.map((turno) => (
          <Turno key={turno.IdTurnos} {...turno} />
        ))}
      </div>
    </>
  );
};

export default MisTurnos;
