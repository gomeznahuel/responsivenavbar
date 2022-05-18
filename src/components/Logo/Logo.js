import { NavLink } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <NavLink to="/" className="logo">
      <span className="logo">Nahuel Gómez</span>
    </NavLink>
  );
};

export default Logo;
