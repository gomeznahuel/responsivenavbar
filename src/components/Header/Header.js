import { useEffect, useState } from "react";
import { DesktopNavigationBar, MobileNavigationBar } from "../Navbar/Navbar";
import Bars from "../Bars/Bars";
import Logo from "../Logo/Logo";
import "./Header.css";
import "../../Stylesheet/MediaQuerys.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.screen.width < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <header className="header">
      <Logo />
      {isMobile ? <Bars /> : null}
      {isMobile ? <MobileNavigationBar /> : <DesktopNavigationBar />}
    </header>
  );
};

export default Header;
