import "../App.css";
import Portrait from "../assets/images/portrait.png";
function AboutPage() {
  return (
    <section className="about-container">
      <img src={Portrait}/>
      <span>Creado Por</span>
      <h1>Jose Moreno</h1>
      <p>Este proyecto nació por la necesidad de automatizar una tarea que tenía  en un antiguo trabajo, la cual consistía la utilización de diferentes  programas (editores de texto y calculadoras) para generar cuentas de  cobro personalizadas en formato PDF, para clientes mensualmente.</p>
      <p className="last-paragraph">Para evitar involucrar a la empresa en la que me encontraba en ese  momento, esta aplicación sufrió varios cambios tanto visuales como  algorítmicos, pero siempre manteniendo la esencia e idea principal por  la que se creó.</p>
      <a href="https://jamm-portfolio.netlify.app/contact" target="_blank" className="portfolio-link">Portafolio Web</a>
    </section>
  )
}
export default AboutPage;
