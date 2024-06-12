import style from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducer";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navContainer}>
        <div className={style.logo}>
          <img src="../../fotos/dibujos-osos-pandas-para-colorear__1_-removebg-preview (1).png" alt="Logo" />
        </div>
        <ul className={style.navLinks}>
          <li><Link to="/Home">Home</Link></li>
          {user ? (
            <>
              <li><Link to="/MisTurnos">Turnos</Link></li>
              <li><span onClick={handleLogout} className={style.logout}>Logout</span></li>
            </>
          ) : (
            <>
              <li><span className={style.disabledLink}>Turnos</span></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
