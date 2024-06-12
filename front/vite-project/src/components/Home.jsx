import style from "../Styles/Home.module.css"

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <header className={style.header}>
        <h1 className={style.title}>Bienvenidos a nuestra Veterinaria Especializada en Pandas</h1>
        <p className={style.subtitle}>Cuidamos de tus amigos exóticos como si fueran nuestros</p>
      </header>
      
      <section className={style.aboutSection}>
        <img className={style.heroImage} src="../../fotos/dibujos-osos-pandas-para-colorear__1_-removebg-preview (1).png" alt="Veterinaria de Pandas" />
        <div className={style.aboutText}>
          <h2>Somos una veterinaria dedicada al cuidado y bienestar de animales exóticos, con una especialización en pandas. Nuestro equipo de expertos veterinarios está aquí para asegurarse de que tus mascotas reciban la mejor atención posible.</h2>
        </div>
      </section>

      <section className={style.servicesSection}>
        <h2>Nuestros Servicios</h2>
        <div className={style.serviceCards}>
          <div className={style.card}>
            <img src="https://i0.wp.com/www.lorosfantasticos.org/wp-content/uploads/2019/06/vets2.jpg?fit=300,200" alt="Consulta General" />
            <h3>Consulta General</h3>
            <p>Proveemos consultas generales para todos los tipos de animales exóticos.</p>
          </div>
          <div className={style.card}>
            <img src="https://visionanimal.com/wp-content/uploads/2017/06/131596.jpg" alt="Cirugía" />
            <h3>Cirugía</h3>
            <p>Ofrecemos servicios quirúrgicos avanzados con el mejor equipo y tecnología.</p>
          </div>
          <div className={style.card}>
            <img src="https://a-z-animals.com/media/2021/10/Animals-with-Opposable-Thumbs-giant-panda-1024x535.jpg" alt="Cuidados Preventivos" />
            <h3>Cuidados Preventivos</h3>
            <p>Prevención y tratamientos para mantener a tus mascotas sanas y felices.</p>
          </div>
        </div>
      </section>

      <section className={style.contactSection}>
        <h2>Contáctanos</h2>
        <p>Estamos aquí para ayudarte con cualquier pregunta o para programar una cita.</p>
        <div className={style.contactDetails}>
          <p><strong>Email:</strong> tecnopanda@veterinaria.com</p>
          <p><strong>Teléfono:</strong> +123 456 7890</p>
          <p><strong>Dirección:</strong> Calle Falsa 123, Ciudad Panda</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
