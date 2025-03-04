import { NavLink } from "react-router-dom";
import { useState } from "react";
import OpenMenuBtn from "../../assets/mobile-menu-btn.svg";
import CloseMenuBtn from "../../assets/close-icon.svg";
import "./Navbar.css";

const Navbar = () => {
	const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
	return (
		<header className="navbar">
			<a className="bold">Cuentas de Cobro</a>
			<button
				className="mobile-menu-btn"
				onClick={() => setToggleMobileMenu((prev) => !prev)}
			>
				<img
					src={toggleMobileMenu ? CloseMenuBtn : OpenMenuBtn}
					className="hamburguer-button"
					alt="toggle-menu"
				/>
			</button>
			<ul className="nav-links" style={toggleMobileMenu ? { display: "flex" } : {}}>
				<li>
					<NavLink to={'/'} onClick={() => setToggleMobileMenu((prev) => !prev)} className={({ isActive }) => isActive ? "current-page" : ""}>Inicio</NavLink>
				</li>
				<li>
					<NavLink to={'/nosotros'} onClick={() => setToggleMobileMenu((prev) => !prev)} className={({ isActive }) => isActive ? "current-page" : ""}>Nosotros</NavLink>
				</li>
			</ul>
		</header>
	)
}
export default Navbar;
