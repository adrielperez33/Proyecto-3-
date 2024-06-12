import style from "../Styles/UnTurno.module.css";
import { useDispatch } from "react-redux";
import { cancelTurno } from "../redux/actions";

const Turno = (character) => {
  const { IdTurnos, fecha, time, status, usuario } = character;
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(cancelTurno(IdTurnos));
  };

  return (
    <div className={style.turno}>
      <h2>Turno ID: {IdTurnos}</h2>
      <p>Fecha: {new Date(fecha).toLocaleDateString()}</p>
      <p>Hora: {time}</p>
      <p>Estado: {status ? "Activo" : "Cancelado"}</p>
      <div className={style.usuarioInfo}>
        <h3>Información del Usuario</h3>
        <p>Nombre: {usuario.nombre}</p>
        <p>DNI: {usuario.nDni}</p>
      </div>
      {status && (
        <button onClick={handleCancel} className={style.cancelButton}>
          Cancelar Turno
        </button>
      )}
    </div>
  );
};

export default Turno;