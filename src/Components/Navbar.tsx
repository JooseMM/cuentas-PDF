import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
  <header className="navbar">
    <span>Generador de Cuentas</span>
    <ul className="nav-links">
      <li>
	<NavLink to={'/'} className={({isActive})=> isActive ? "current-page" : "" }>Inicio</NavLink>
      </li>
      <li>
	<NavLink to={'/nosotros'} className={({isActive})=> isActive ? "current-page" : "" }>Nosotros</NavLink>
      </li>
    </ul>
  </header>
  )
}
export default Navbar;
