import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import style from "../Styles/CrearTurno.module.css";

const CrearTurno = () => {
  const user = useSelector((state) => state.user.user); 
  const [formData, setFormData] = useState({
    fecha: "",
    hora: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user) {
        throw new Error("Usuario no logueado. Debes iniciar sesión para crear un turno.");
      }

      const { fecha, hora } = formData;
      const turnoData = {
        fecha: new Date(fecha).toISOString(), 
        time: hora,
        status: true, 
        usuarioId: user.idUser, 
      };

      const response = await axios.post("http://localhost:3001/appointment/schedule", turnoData);

      if (response.status === 201) {
        setSuccessMessage("¡Turno creado correctamente!");
        alert("¡Turno creado correctamente!")
        setFormData({
          fecha: "",
          hora: "",
        });
        window.location.reload(); 
      } else {
        throw new Error("Error al crear el turno");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          required
        />
        <label htmlFor="hora">Hora:</label>
        <input
          type="time"
          id="hora"
          name="hora"
          value={formData.hora}
          onChange={handleChange}
          required
        />
        <button type="submit">Crear Turno</button>
      </form>
      {error && <p className={style.error}>{error}</p>}
      {successMessage && <p className={style.success}>{successMessage}</p>}
    </div>
  );
};

export default CrearTurno;
