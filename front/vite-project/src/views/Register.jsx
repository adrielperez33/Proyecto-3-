import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/reducer';
import styles from '../Styles/Forms.module.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    nombre: '',
    email: '',
    birthdate: '',
    nDni: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    return formData.username && formData.password && formData.nombre && formData.email && formData.birthdate && formData.nDni;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/users/register', formData);
      if (response.status === 201) {
        const { user } = response.data;
        alert('Registro exitoso.');
        dispatch(setUser(user)); 
        setFormData({
          username: '',
          password: '',
          nombre: '',
          email: '',
          birthdate: '',
          nDni: '',
        });
        navigate("/login"); 
      } else {
        alert('Error al registrar el usuario.');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Ocurrió un error al registrar el usuario.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h1>Registro</h1>
      <div>
        <label>
          Nombre de usuario:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Fecha de nacimiento:
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Número de DNI:
          <input
            type="text"
            name="nDni"
            value={formData.nDni}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Registrar</button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default RegisterForm;
