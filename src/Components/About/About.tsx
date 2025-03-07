import Portrait from "../../assets/images/portrait.png";
import "./About.css";

function AboutPage() {
  return (
    <section className="about-container">
      <img className="portrait-image" src={Portrait} />
      <span className="about-second-title">Creado Por</span>
      <h2 className="about-primary-title">Jose Moreno</h2>
      <p>
        Este proyecto nació por la necesidad de automatizar una tarea que tenía
        en un antiguo trabajo, la cual consistía la utilización de diferentes
        programas (editores de texto y calculadoras) para generar cuentas de
        cobro personalizadas en formato PDF, para clientes mensualmente.
      </p>
      <p>
        Para evitar involucrar a la empresa en la que me encontraba en ese
        momento, esta aplicación sufrió varios cambios tanto visuales como
        algorítmicos, pero siempre manteniendo la esencia e idea principal por
        la que se creó.
      </p>
      <a
        href="https://jamm-portfolio.netlify.app/contact"
        target="_blank"
        className="main-button portfolio-link"
      >
        Portafolio Web
      </a>
    </section>
  );
}
export default AboutPage;
