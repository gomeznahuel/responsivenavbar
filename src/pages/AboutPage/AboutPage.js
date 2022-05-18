import { useContext } from "react";
import { MyContext } from "../../context/useNavbarContext";
import "./AboutPage.css";

const AboutPage = () => {
  const { opacity } = useContext(MyContext);

  return (
    <div className="about" style={{ opacity }}>
      This is the About Page
    </div>
  );
};

export default AboutPage;