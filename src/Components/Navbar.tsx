import { NavLink } from "react-router-dom";
import { useState } from "react";
import  OpenMenuBtn  from "../assets/mobile-menu-btn.svg";
import  CloseMenuBtn  from "../assets/close-icon.svg";

const Navbar = () => {
const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  return (
  <header className="navbar">
    <span className="bold">Cuentas de Cobro</span>
    <button className="mobile-menu-btn" onClick={() => setToggleMobileMenu((prev)=> !prev)}><img src={ toggleMobileMenu ? CloseMenuBtn : OpenMenuBtn} width={45} height={30} alt="toggle-menu"/></button>
    <ul className="nav-links" style={toggleMobileMenu ? {display: "flex"} : {}}>
      <li>
	<NavLink to={'/'} onClick={()=> setToggleMobileMenu((prev)=> !prev)} className={({isActive})=> isActive ? "current-page" : "" }>Inicio</NavLink>
      </li>
      <li>
	<NavLink to={'/nosotros'} onClick={()=> setToggleMobileMenu((prev)=> !prev)} className={({isActive})=> isActive ? "current-page" : "" }>Nosotros</NavLink>
      </li>
    </ul>
  </header>
  )
}
export default Navbar;
