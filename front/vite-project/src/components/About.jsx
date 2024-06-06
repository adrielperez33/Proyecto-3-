import style from '../Styles/About.module.css';

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <h1>About Us</h1>
      <p>
        Somos una veterinaria enfocada en animales exóticos con especialidades en pandas.
        Nuestro equipo de profesionales está dedicado a brindar el mejor cuidado y atención a estos maravillosos seres.
      </p>
      <p>
        En nuestra clínica, los pandas y otros animales exóticos encuentran un refugio seguro, lleno de amor y cuidados especiales.
        Nos enorgullece contar con instalaciones de última generación y un equipo de expertos comprometidos con la salud y el bienestar de cada uno de nuestros pacientes.
      </p>
      <p>
        ¡Visítanos y descubre el mundo fascinante de los animales exóticos con nosotros!
      </p>
    </div>
  );
}
export default About;