import { useState, useEffect } from "react";
import Turno from "../components/UnTurno";
import style from "../Styles/MisTurnos.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CrearTurno from "./CrearTurno";

const MisTurnos = () => {
  const user = useSelector((state) => state.user.user);
  const [turnos, setTurnos] = useState([]);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      axios.get('http://localhost:3001/appointments')
        .then((res) => {
          const filteredTurnos = res.data.filter(turno => turno.usuario.idUser === user.idUser);
          setTurnos(filteredTurnos);
        })
        .catch((err) => setError(err.message)); 
    } else {
      setError("Usuario no logueado. Debes iniciar sesión para ver tus turnos.");
      navigate("/Home");
    }
  }, [user, navigate]);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <>
      <h1 className={style.title}>Mis Turnos</h1>
      <p className={style.title}>
        Aclaración: es importante que los turnos se soliciten <br/> en un horario posible (de 8 am a 18 pm)
      </p>
      <button onClick={toggleForm} className={style.toggleFormButton}>
        {showForm ? "Cancelar Crear Turno" : "Crear Nuevo Turno"}
      </button>
      {showForm && <CrearTurno />}
      {error ? (
        <p className={style.error}>Error al cargar turnos: {error}</p> 
      ) : (
        <div className={style.turnosContainer}>
          {turnos.length > 0 ? (
            turnos.map((turno) => (
              <Turno key={turno.IdTurnos} {...turno} />
            ))
          ) : (
            <p className={style.title}>No hay turnos disponibles.</p>
          )}
        </div>
      )}
    </>
  );
};

export default MisTurnos;
