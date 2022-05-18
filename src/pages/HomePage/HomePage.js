import { useContext } from "react";
import { MyContext } from "../../context/useNavbarContext";
import "./HomePage.css";

const Home = () => {
  const { opacity } = useContext(MyContext);

  return (
    <div className="home" style={{ opacity }}>
      This is the Home Page
    </div>
  );
};

export default Home;
