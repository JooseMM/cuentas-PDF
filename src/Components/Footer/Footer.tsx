import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to={"/"}>Cuentas de Cobro</Link>
        </li>
        <li>Copyright © 2024</li>
      </ul>
      <ul>
        <li>Paginas</li>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/nosotros"}>Nosotros</Link>
        </li>
      </ul>
      <ul>
        <li>Contacto</li>
        <li>
          <a href="mailto:jamm.webdev@gmail.com">jamm.webdev@gmail.com</a>
        </li>
        <li>
          <a href="callto:+56932845558">+56 9 3284 5558</a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
