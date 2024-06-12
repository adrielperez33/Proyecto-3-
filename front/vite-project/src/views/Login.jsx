import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/reducer';
import styles from '../Styles/Forms.module.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    return formData.username && formData.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/users/login', formData);
      if (response.status === 200) {
        const { login, user } = response.data;
        if (login) {
          alert('Inicio de sesión exitoso.');
          dispatch(setUser(user));
          setFormData({
            username: '',
            password: '',
          });
          navigate("/home");
        } else {
          alert('Nombre de usuario o contraseña incorrectos.');
        }
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Ocurrió un error al iniciar sesión.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h1>Iniciar Sesión</h1>
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
      <button type="submit">Iniciar Sesión</button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default LoginForm;
