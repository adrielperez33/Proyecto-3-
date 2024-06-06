import style from "../Styles/Navbar.module.css"
const Navbar = () =>{
    return (
        <nav className={style.navbar}>
          <div className={style.navContainer}>
            <div className={style.logo}>
              <img src="../../fotos/dibujos-osos-pandas-para-colorear__1_-removebg-preview (1).png" alt="Logo" />
            </div>
            <ul className={style.navLinks}>
              <li><a href="#home">Home</a></li>
              <li><a href="#turnos">Turnos</a></li>
              <li><a href="#login">Login</a></li>
              <li><a href="#register">Register</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
        </nav>
      );
    
}

export default Navbar