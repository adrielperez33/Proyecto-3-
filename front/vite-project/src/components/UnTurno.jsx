import style from '../Styles/UnTurno.module.css';

const Turno = (character) => {
    const { IdTurnos, fecha, time, status, usuarioId } = character
    return (
      <div className={style.turno}>
        <h2>Turno ID: {IdTurnos}</h2>
        <p>Fecha: {fecha.toLocaleDateString()}</p>
        <p>Hora: {time}</p>
        <p>Estado: {status ? 'Activo' : 'Cancelado'}</p>
        <p>Usuario ID: {usuarioId}</p>
      </div>
    );
  };
  
  export default Turno;