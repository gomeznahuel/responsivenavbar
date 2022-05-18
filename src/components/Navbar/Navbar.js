import { useContext } from "react";
import { MyContext } from "../../context/useNavbarContext";
import { NavLink } from "react-router-dom";
import './Navbar.css';

export const DesktopNavigationBar = () => {
  return (
    <ul className="navbar-desktop">
      <li className="navbar__item">
        <NavLink to="/" className="navbar__link">
          Home
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="/about" className="navbar__link">
          About
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="/projects" className="navbar__link">
          Projects
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="/contact" className="navbar__link">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export const MobileNavigationBar = () => {
  const { display, handleClick } = useContext(MyContext);
  
  return (
    <ul className="navbar-mobile" style={{ display }}>
      <li className="navbar-mobile__item">
        <NavLink to="/" className="navbar-mobile__link" onClick={() => handleClick()}>
          Home
        </NavLink>
      </li>
      <li className="navbar-mobile__item">
        <NavLink to="/about" className="navbar-mobile__link" onClick={() => handleClick()}>
          About
        </NavLink>
      </li>
      <li className="navbar-mobile__item">
        <NavLink to="/projects" className="navbar-mobile__link" onClick={() => handleClick()}>
          Projects
        </NavLink>
      </li>
      <li className="navbar-mobile__item">
        <NavLink to="/contact" className="navbar-mobile__link" onClick={() => handleClick()}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};
